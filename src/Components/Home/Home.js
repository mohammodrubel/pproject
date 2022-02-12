import React from 'react';
import Navigation from './Common/Navigation';
import Blogs from '../Home/Blogs/Blogs'
import Footer from './../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;