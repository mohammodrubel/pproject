import React, { useState } from 'react';
import Navigation from './../../Home/Common/Navigation';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Reset.css'
import Footer from '../../Footer/Footer';
import useAuth from './../../../Hooks/UseAuth/UseAuth';

const Reset = () => {
    const [email,setEmeail] = useState('')
    const {resetEmail} = useAuth()

    const userEmail = e =>{
        setEmeail(e.target.value)
    }

  const formSubmit = e =>{
    resetEmail(email)
    e.preventDefault()
}
    return (
        <div className='reset'>
                <Navigation></Navigation>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 mx-auto mt-5'>
                        <form className='p-5' onSubmit={formSubmit}>
                            <h6 className='text-danger'>When your press submit button as soon as check your email Address,and Change website Email Password</h6>
                            <input onBlur={userEmail} type="email" className='form-control mt-5 border border-1' placeholder='Email Name' />
                            <div><Button type='submit' variant='warning' className='w-100 mt-4'> Submit </Button></div>
                            
                            
                            <h6 style={{color:'white'}} className="mt-2">if you have No Account please  <Link to="/regristration">Regristration</Link></h6>
                            <h6  className="mt-2"style={{color:'white'}}>if you alredy registerd please <Link to="/login">Login</Link></h6>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Reset;