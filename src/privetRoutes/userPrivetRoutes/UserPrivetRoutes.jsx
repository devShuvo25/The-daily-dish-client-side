import React from 'react';
import useAuth from '../../hooks/authentication/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../../components/Loader/Loader';
import Spinner from '../../components/Loader/Spinner';

const UserPrivetRoutes = ({children}) => {
    const {isLoading,user} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <Spinner/>
    }
    if(!user){
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }
    
    return children;
};

export default UserPrivetRoutes;