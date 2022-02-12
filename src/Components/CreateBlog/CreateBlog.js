import React from 'react';
import { Button } from 'react-bootstrap';
import './CreateBlog.css'
import Navigation from './../Home/Common/Navigation';
import { useForm } from "react-hook-form";
import axios from 'axios';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';

const CreateBlog = () => {
    const [value, setValue] = React.useState(new Date());
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/blogs',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Congress! new blog update')
            }
        })
        reset()
    };

    return (
        <div className='createBlog'>
            <Navigation></Navigation>
            <div className='row'>
            <div className='col-md-7'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='input Your IMG URL' className="m-2 extrainput" style={{paddgin:'10px',marginTop:'25px'}} type="text" className='form-control'{...register("imgUrl")} />

                <input placeholder='input Your Blog Headline' className="m-2 extrainput" style={{paddgin:'10px',marginTop:'25px'}} type="text" className='form-control'{...register("headline")} />

                <input value={value.toLocaleString()} className="m-2 extrainput" style={{paddgin:'10px',marginTop:'25px'}} type="text" className='form-control'{...register("dateandtime")} />

                <textarea placeholder='Input Your Blog Text....' className="m-2 extrainput" style={{paddgin:'10px',marginTop:'25px'}} rows={12} type="text" className='form-control'{...register("discription")} />

                <div className=' text-center'><Button type="submit" className="w-100 border-none bg-primary mt-3" type="submit">SUBMIT</Button></div>
            </form>
        </div>
        <div className="col-md-5">
           <div className='mt-5'>
           <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
           </div>
            </div>
        </div>
        </div>
    );
};

export default CreateBlog;