import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Footer from './../Footer/Footer';
import Navigation from './../Home/Common/Navigation';


const Information = () => {
    const [informations,setInformation] = useState([])

        useEffect(()=>{
            fetch('http://localhost:5000/contactUs')
            .then(Response => Response.json())
            .then(data => setInformation(data))
        },[])
// console.log(informations)
const handleInformation = id =>{
    const confirm = window.confirm('are you sure ? you want to delete this comment? ')
    if(confirm){
        const url = `http://localhost:5000/contactUs/${id}`
    fetch(url,{
        method:'DELETE'
    })
    .then(Response => Response.json())
    .then(data =>{
        if(data.deletedCount >0){
            alert('deleted successfully')
            const temporary = informations.filter(ontime => ontime._id !== id)
            setInformation(temporary)
            
        }
    })
    }
}

    return (
        <>
        <Navigation></Navigation>
            <Container>
            <Row>
                <Col md={8} className="mx-auto">
                    {
                        informations.map(info => <div class="card mt-4">
                        <h5 class="card-header">{info.Name}</h5>
                        <div class="card-body">
                            <h5 class="card-title">{info.email}</h5>
                            <p class="card-text text-danger">{info.Address}</p>
                            <p class="card-text">{info.message}</p>
                            <Button onClick={()=>handleInformation(info._id)} variant='warning'> Delete </Button>
                        </div>
                        </div>)
                    }    
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Information;