import React from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from './Components/Navbar'
import {getCookie} from './utility'
export const ProtectedRoute = (props) => {
    const Component = props.component;
    const isAuthenticated = true;

    return isAuthenticated ? (<>
        <div id="main">
        <NavBar />
        <section>
            <Component />
        </section>
        </div>
    </>
    ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
}


