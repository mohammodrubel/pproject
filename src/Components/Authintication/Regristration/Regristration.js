import React, { useState,useEffect } from 'react';
import './Regristration.css'
import Navigation from './../../Home/Common/Navigation';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './../../Footer/Footer';
import facebook from '../../img/fardintazbeed,facebook.png'
import google from '../../img/fardintazbeed,google.png'
import useFIrebase from './../../../Hooks/UseFIrebase';
import { LinearProgress } from '@mui/material';
import useAuth from './../../../Hooks/UseAuth/UseAuth';

const Regristration = () => {
    const [loginData,setLoginData] = useState({})
    const {registerUser,isLoading,error,googleSingin,handleFacebook} = useAuth()
    const navigate = useNavigate()

    const handleChange = e =>{
        const feld = e.target.name
        const value = e.target.value
        const newData = {...loginData}
        newData[feld] = value; 
        setLoginData(newData)
    }
   
const formRegister = e =>{
    if(loginData.password !== loginData.password2){
        alert('your Password did not matched,pleace try again latter')
        return
    }
    registerUser(loginData.email,loginData.password,loginData.name,navigate)
    e.preventDefault()
}


    return (
        <div className='regristration'>
            <Navigation></Navigation>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 mx-auto'>

                        {!isLoading && <form className='p-2' onSubmit={formRegister}>
                        <h2 style={{color:'white',textAlign:'center'}}>Authentication</h2>

                            <input name='name' onBlur={handleChange} type="text" className='form-control mt-2 border border-1' placeholder='Full Name' />
                            <input  onBlur={handleChange} name='email' type="text" className='form-control mt-5 border border-1' placeholder='Email Name' />
                            <input onBlur={handleChange} name='password' type="text" className='form-control mt-5 border border-1' placeholder='Password' />
                            <input onBlur={handleChange} name='password2' type="text" className='form-control mt-5 border border-1' placeholder='Password' />

                            <h6 style={{color:'red'}}>{error}</h6>
                            <div><Button type='submit' variant='warning' className='w-100 mt-4'> Login </Button></div>

                            <div>
                                <Button onClick={handleFacebook} variant="regular"  className='w-50 mt-4'><img src={facebook} style={{width:'280px,height:"30px',borderRadius:'5px'}} alt="fardin Tazbeed" /></Button>
                                <Button onClick={googleSingin} variant="regular"  className='w-50 mt-4 '> <img src={google} style={{width:'280px',borderRadius:'5px'}} alt="fardin Tazbeed" /></Button>
                            </div>
                            
                            <h6  className="mt-2"style={{color:'white'}}>if you alredy registerd please <Link to="/login">Login</Link></h6>
                            <h6  className="mt-2"style={{color:'white'}}>Forgate Your Password ?<Link to="/reset">Change Password</Link></h6>
                            <h6 style={{color:'white'}}>{error}</h6>
                        </form> }
                        {isLoading && <LinearProgress style={{color:'red'}} />}
                        
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Regristration;