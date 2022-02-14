import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from './../Home/Common/Navigation';
import Footer from './../Footer/Footer';
import { reverse } from 'lodash';
import Comments from '../Comments/Comments';
import useAuth from './../../Hooks/UseAuth/UseAuth';
import { Spinner } from 'react-bootstrap';


const Details = () => {
    const {detail} = useParams()
    const {user,isLoading} = useAuth()
    // const navigate = useNavigate()
    const [ontimeData ,setOntimeData] = useState({})
    const {imgUrl,headline,discription} = ontimeData
    
    // console.log(imgUrl)
    
    useEffect(()=>{
        fetch('https://mysterious-mountain-50221.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setOntimeData(data.getBlog.find((p)=> p._id ===  detail)))
    },[])
    // console.log(ontimeData)
    if(isLoading){
        return <div className="text-center"><Spinner animation="grow" variant="danger" /></div>
    }
    return (
       <>
            <Navigation></Navigation>
                <div className='container'>
                    <div className='row'>
                        <h3 className='text-center mt-5'>{headline}</h3> <hr />
                        <div className='col-md-6 mt-4'>
                            {discription}
                        </div>
                        <div className='col-md-6 mt-4'>
                        <img src={imgUrl}className="img-fluid" alt="fardin tazbeed" />
                        </div>
                    </div>
                </div>
                <Comments></Comments>
            <Footer></Footer>
       </>
    );
};

export default Details;