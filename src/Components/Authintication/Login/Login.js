import React, { useState ,useEffect} from 'react';
import Navigation from '../../Home/Common/Navigation';
import './Login.css'
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Footer from './../../Footer/Footer';
import firebaseInit from './../../FIrebase/FirebaseInit/FirebaseInit';
import facebook from '../../img/fardintazbeed,facebook.png'
import google from '../../img/fardintazbeed,google.png'
import useAuth from './../../../Hooks/UseAuth/UseAuth';
import { LinearProgress } from '@mui/material';



firebaseInit()
const Login = () => {
    const [loginData,setLoginData] = useState({})
    const {loginUser,isLoading,error,googleSingin,handleFacebook} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleChange = e =>{
        const feld = e.target.name
        const value = e.target.value
        const newData = {...loginData}
        newData[feld] = value; 
        setLoginData(newData)
    }
   
const loginHandaler = e =>{
    loginUser(loginData.email,loginData.password,location,navigate)
    e.preventDefault()
}

const handleGoogle= (location,navigate)=>{
    googleSingin(location,navigate)
}
const singinFacebook = (location,navigate)=>{
    handleFacebook(location,navigate)
}


    return (
        <div className='login'>
            <Navigation></Navigation>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 mx-auto'>
                    {!isLoading && <form className='p-2' onSubmit={loginHandaler}>
                        <h2 style={{color:'white',textAlign:'center'}}>Authentication</h2>
                            <input onBlur={handleChange} name='email' type="text" className='form-control mt-5 border border-1' placeholder='Email Name' />
                            <input onBlur={handleChange} name='password' type="text" className='form-control mt-5 border border-1' placeholder='Password' />
                            <div><Button type='submit' variant='warning' className='w-100 mt-4'> Login </Button></div>
                            <h5 className='text-danger'>{error}</h5>
                            <div>
                            <Button onClick={singinFacebook} variant="regular"  className='w-50 mt-4'><img src={facebook} style={{width:'280px,height:"30px',borderRadius:'5px'}} alt="fardin Tazbeed" /></Button>
                            <Button onClick={handleGoogle} variant="regular"  className='w-50 mt-4 '> <img src={google} style={{width:'280px',borderRadius:'5px'}} alt="fardin Tazbeed" /></Button>
                            </div>
                            <h6 style={{color:'white'}} className="mt-2">if you have No Account please  <Link to="/regristration">Regristration</Link></h6>
                            <h6  className="mt-2"style={{color:'white'}}>Forgate Your Password ?<Link to="/reset">Change Password</Link></h6>

                        </form>}
                        {isLoading && <LinearProgress style={{color:'red'}} />}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;