import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from './../../Hooks/UseAuth/UseAuth';
import fardin from '../img/voiceoffardin.png'
import facebook from '../img/fardintazbeed,facebook.png'
import google from '../img/fardintazbeed,google.png'
import './Comments.css'





const Comments = () => {
    
    const {detail} = useParams()
    const { register, handleSubmit,reset } = useForm();
    const [comments,setComments,isLoading] = useState([])
    const {user,googleSingin,handleFacebook,} = useAuth()

    const onSubmit = data => {
        axios.post('http://localhost:5000/comments',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Submit Confirm! ')
            }
            reset()
            
        })

 
    }

    useEffect(()=>{
        fetch('http://localhost:5000/comments')
        .then(Response => Response.json())
        .then(data =>  setComments(data.filter((p)=> p.BlogId == detail)))
    },[])
    
    // if(isLoading){
    //     return <div className="text-center"><Spinner animation="grow" variant="danger" /></div>
    // }
   
    
    const handleDeleteComments = id =>{
        const confirm = window.confirm('are you sure ? you want to delete this comment? ')
        if(confirm){
            const url = `http://localhost:5000/comments/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(Response => Response.json())
        .then(data =>{
            if(data.deletedCount >0){
                alert('deleted successfully')
                const temporary = comments.filter(ontime => ontime._id !== id)
                setComments(temporary)
                
            }
        })
        }
    }
    
    return (
        
        <div>
            
            <div className='col-md-9 mx-auto'>
            

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input value={detail} className='form-control custom' {...register("BlogId")}hidden />

                    <input hidden value={user.displayName} className='form-control custom' {...register("personName")} />
                    <input hidden value={user.email} className='form-control custom' {...register("personEmail")} />

                    <textarea className='form-control custom border border-1'rows={6} type="number" {...register("Comments")} />

                    {user.email ? <Button style={{background:'#010323',color:'white'}} className='text-white p-2 w-100' type="submit">Submit Your Comment</Button> : <div class="alert alert-warning" role="alert">
                    <Link to="/login">If You want to Comments, plese Login</Link>
                    </div>}

                </form> 
                {/* {!user.email ? <div className='text-center'>
                    <Button onClick={handleFacebook} style={{background:'transparent',border:'none'}}><img src={facebook} alt="" /></Button>
                    <Button onClick={googleSingin} style={{background:'transparent',border:'none'}}><img src={google} alt="" /></Button>
                </div> : <span></span>} */}

            </div> 
           <div className='col-md-7 mx-auto'>
            {
                comments.map(comment => <div className='card mt-4' style={{background:'#F4F4F4'}}>
                    <div style={{display:'flex',alignItems:'center'}}>
                    <img src={fardin} style={{width:'50px',display:'inline'}} alt="" />
                    <span style={{color:'red',fontWeight:'600',padding:'0px 20px'}}><i>{comment.personName}</i></span>
                    </div>
                    <p style={{marginLeft:'80px'}}>{comment.Comments}</p>
                    {
                         
                        user.email === comment.personEmail ?
                        <span style={{color:'red',cursor:'pointer'}} onClick={()=>handleDeleteComments(comment._id)} className="text-end p-2">Delete Your Comment</span> : <span></span>
                            
                        
                    }
                </div>)
            }
            </div>  
                 
        </div>
    );
};

export default Comments;