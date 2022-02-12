import React from 'react';
import useAuth from './../../../Hooks/UseAuth/UseAuth';

const DashbordHome = () => {
    const {admin} = useAuth()
    return (
        <div className='col-md-6 mx-auto'>
            
             <div className='mt-3'><span className="text-danger">Website Home </span> <span className='text-danger'><b> এর মাধ্যমে সরাসরি মেইন ওয়েবসাইটে নিয়ে যাবে </b></span> </div>
             <div className='mt-3'><span className="text-danger">Dashbord Home </span> <span className='text-danger'><b>ডেশবোর্ড এর মুল পেইজেই রেখে দিবে  </b></span></div>
             <div className='mt-3'><span className="text-danger">Create Blog </span> <span className='text-danger'><b>নতুন করে ব্লোগ লিখতে চাইলে ক্রিয়েট ব্লগে চলে যেতে হবে </b></span></div>
             <div className='mt-3'><span className="text-danger">User Massege </span> <span className='text-danger'><b> ইউজার এডমিন কে মেসেজ পাঠালে তা এখান থেকে কন্ট্রোল করা যাবে </b></span></div>
             <div className='mt-3'><span className="text-danger">Delete Blog </span> <span className='text-danger'><b>এখান থেকে ব্লোগ ডিলেট করতে হবে </b> </span> <br /></div>
             <div className='mt-3'><span className="text-danger">Create Admin </span> <span className='text-danger'><b>এখান থেকে নতুন এডমিন বানানো যাবে  যে বেক্তি সকল কিছুর এক্সেস পাবে </b> </span></div>
            
        </div> 
    );
};

export default DashbordHome;