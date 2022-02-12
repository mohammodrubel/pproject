import React from 'react';
import Navigation from './../Home/Common/Navigation';
import Footer from './../Footer/Footer';
import useAuth from './../../Hooks/UseAuth/UseAuth';
import './ContactUs.css'
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';

const ContactUs = () => {
    const {user} = useAuth()
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/contactUs',data)
        .then(res => {
            if(res.data.insertedId){
                alert('massage send Confirm!')
            }
            reset()
            
        })
    };
    return (
        <>
            <Navigation></Navigation>
            <h3 className='text-center'>Contact Us</h3>
            <div className='container'>
                <div className='row'>
                    <form className='g-3 needs-validation border border-1 p-5' onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className='col-md-6 '>

                                <input  type="text" className='form-control customInput mt-4 p-2'placeholder='Enter Your Name'{...register("Name")} />
                                <input  type="email" value={user.email} className='form-control customInput mt-4 p-2' {...register("email")}/>
                                <textarea  rows={4} type="text" className='form-control customInput mt-4 p-2' placeholder='Enter Your Address.....'{...register("Address")}></textarea>
                            
                            </div>
                            <div className='col-md-6'>

                                <textarea  rows={10} type="text" className='form-control customInput mt-4'{...register("message")} placeholder='Enter Your Massege & send to admin .....'></textarea>

                            </div> 
                            <div className='text-center mt-2'><Button type='submit' className="w-50 contactUsMsg">Send Massage</Button></div>   
                        </div>
                    </form>
                </div>    
            </div>
            <Footer></Footer>
        </>
    );
};

export default ContactUs;