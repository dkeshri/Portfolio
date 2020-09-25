import React from 'react'
import { Redirect } from 'react-router-dom'
export const  ProtectedRoute = (props)=> {
    const Component = props.component;
        const isAuthenticated = false;
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
}


