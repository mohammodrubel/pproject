import React, { createContext } from 'react';
import useFIrebase from './../../Hooks/UseFIrebase';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const allContext = useFIrebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;