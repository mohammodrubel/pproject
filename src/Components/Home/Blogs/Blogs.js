import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Comments from '../../Comments/Comments';
import './Blogs.css'


const Blogs = () => {

    const [blog,setBlog] = useState([])
    const [pageCount,setPageCount] = useState(0)
    const [page,setPage] = useState(0)
    const size = 12
    useEffect(()=>{
        fetch(`https://mysterious-mountain-50221.herokuapp.com/blogs?page=${page}&&size=${size}`)
        .then(Response => Response.json())
        // .then(data => setBlog(data))
        .then(data => {
            setBlog(data.getBlog)
            const count = data.count;
            const pageNumber = Math.ceil(count / size )
            setPageCount(pageNumber)
        })
        
    },[page])


    return (
        <>
          
        <div className='container-fluid'>
            <row>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-12 row-cols-md-3">
                {
                    blog.map(single => <div className='col'>
                        <div className="card" style={{margin:'10px 0px'}}>
                    <img src={single.imgUrl} className="img-fluid card-img-top p-2" alt="..."/>
                    <div class="card-body">
                      <h6 class="card-title">{single.headline}</h6>
                      <Link to={`/blog/${single._id}`}><i style={{fontSize:'25px',color:'#010323'}} class="fas fa-info-circle mt-2"></i></Link>
                      {/* <span style={{color:'grey'}}>{single.dateandtime}</span> */}
                    </div>
                  </div>
                    </div>)
                   }
                </div>
            </row>
            <div className='text-center' >
                    {

                    [...Array(pageCount).keys()].map(number =>

                        <button style={{borderRadius:'50%',width:'30px',height:'30px',margin:'5px',background:'#010323',color:'white'}}  className={number === page ? 'selected' : '' } key={number} onClick={()=>setPage(number)} >{number+1}</button>

                        )

                    }
            </div>
        </div>
        </>
    );
};

export default Blogs;