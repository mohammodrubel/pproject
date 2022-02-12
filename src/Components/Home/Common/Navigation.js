import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../img/logo.png'
import './Navigation.css'
import useAuth from './../../../Hooks/UseAuth/UseAuth';
import { getMasonryUtilityClass } from '@mui/lab';




const Navigation = () => {
const {user,logout,admin} = useAuth()
    return (
        <div>
            <Navbar sticky='top' collapseOnSelect expand="lg" style={{background:'#010323'}}>
                <Container>
                <Link to="/" style={{textDecoration:'none',color:'red',fontSize:'24px',fontWeight:'600',margin:'0px 20px',fontFamily: 'Kaushan Script'}}>Voice of Fardin</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Link to="/blog" style={{color:'white',textDecoration:'none',marginTop:'28px',marginLeft:'20px'}}>Blog</Link>
                        <Link to="/contactus" style={{color:'white',textDecoration:'none',marginTop:'28px',marginLeft:'20px'}}>Contact Us</Link>
                        {admin && <Link to="/dashbord" style={{color:'red',textDecoration:'none',marginTop:'28px',marginLeft:'20px'}}>Dashbord</Link>}
                        <NavDropdown style={{color:'white',textDecoration:'none',marginTop:'15px',margin:"20px 20px"}} className='dropdown' title="Authentication" id="collasible-nav-dropdown">
                            <Link style={{textDecoration:'none',padding:'3px 10px',color:'#010323'}} to="/login">Login</Link> <br />
                            <Link style={{textDecoration:'none',padding:'3px 10px',color:'#010323'}} to="/regristration">Registration</Link> <br />
                        </NavDropdown>
                        </Nav>

                        <Nav>
                            <span style={{fontFamily: 'Kaushan Script,cursive',color:'yellow',fontWeight:'700px',margin:'0px 30px',fontSize:'22px'}}>
                                {new Date().toLocaleTimeString()}
                            </span>
                        </Nav>

                        <Nav>
                        {
                            user?.email ? 
                            <h6 onClick={logout} className=" mt-2  m-2" style={{cursor:'pointer',color:'red',fontWeight:'700'}}> Logout </h6> 
                            :
                            <Link to='/login' className="mt-2  m-2" style={{cursor:'pointer',textDecoration:'none',color:'yellow'}}>Login </Link>
                        }
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;