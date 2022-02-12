import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const DeleteBlog = () => {
    const [deletesBlog,setDeleteBlog] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(Response => Response.json())
        .then(data => setDeleteBlog(data.getBlog))
    },[])


    const handleDeleteComments = id =>{
        const confirm = window.confirm('are you sure ? you want to delete this comment? ')
        if(confirm){
            const url = `http://localhost:5000/blogs/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(Response => Response.json())
        .then(data =>{
            if(data.getBlog.deletedCount >0){
                alert('deleted successfully')
                const temporary = deletesBlog.filter(ontime => ontime._id !== id)
                setDeleteBlog(temporary)
                
            }
        })
        }
    }

    return (
        <>
            {
                deletesBlog.map(dlete => <div class="card mt-3">
                <div className="card-header">
                  {dlete.headline}
                </div>
                <div className="card-body">
                  <p className="card-text">{dlete.discription}</p>
                  <Button variant="danger" onClick={()=>handleDeleteComments(dlete._id)}>Delete Your Blog</Button>
                </div>
              </div>)
            }
        </>
    );
};

export default DeleteBlog;