import React from 'react';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import { Navigate,  useLocation } from 'react-router-dom';
import { LinearProgress } from '@mui/material';

const RequiredRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth()
        let location = useLocation();
        
        if(isLoading){return <LinearProgress color="secondary" />}

        if(user.email){return children;}
        return <Navigate to="/login" state={{from:location}}  />
         
};

export default RequiredRoute;