import React from 'react';
import img from '../../Components/img/logo.png'

const Footer = () => {
    return (
        <div className="container-fluid" style={{background:"#010323"}}>
            <div className="row mt-5">
                <div className='mx-auto mt-5' style={{textAlign:'center',padding:'5px '}}>
                    <h5 style={{color:'white'}}>Fardin Tazbeed</h5>
                    <img src={img} style={{width:'70px',width:'70px',borderRadius:'50%'}} alt="" />
                    <ul className='list-inline'>
                        <li className='list-inline-item'><a href="https://www.facebook.com/fardintazbeed/"><i style={{color:'white',cursor:'pointer'}} class="fab fa-facebook"></i></a></li>
                        <li className='list-inline-item'><a href="https://www.instagram.com/amar_ekta_nodi_chilo/"><i style={{color:'white',cursor:'pointer'}} class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;