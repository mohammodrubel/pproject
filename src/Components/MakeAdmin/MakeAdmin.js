import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email,setEmail] = useState('')


    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const createAdmin = e =>{
        const user = {email}
        fetch('http://localhost:5000/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(Response => Response.json())
        .then(data =>{
            console.log(data)
            alert('new Admin Added')
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2 className='text-center text-primarry'>Hello Fardin Do you want To make another Admin ? For Your Website ..</h2>
            <div className='col-md-6 mx-auto'>
                <form  onSubmit={createAdmin}>
                    <input onBlur={handleEmail} type="email" className='form-control custom' placeholder='New Admin Email' />   
                    <div className='text-center'><Button type='submit'  variant='success' className='mt-4 w-50'>Create Admin</Button> </div>
                </form>    
            </div>
        </div>
    );
};

export default MakeAdmin;