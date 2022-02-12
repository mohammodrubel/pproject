import React from 'react';
import fardin from '../../img/fardintazbeed.jpg'
import Navigation from '../../Home/Common/Navigation';

const NotFound = () => {
    return (
        <div className='text-center'>
            <Navigation></Navigation>
            <img src={fardin} className="img-fluid w-50" alt="Fardin tazbeed" />
        </div>
    );
};

export default NotFound;