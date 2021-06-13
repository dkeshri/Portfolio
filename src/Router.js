import React from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import Home from './Components/Home'
import PageNotFound from './Components/Common/PageNotFound'
import { AnimatePresence } from 'framer-motion'
import About from './Components/About/About'
export const AppRouter = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <ProtectedRoute path="/" exact component={About} />
                <ProtectedRoute path="/Home" exact component={Home} />
                <ProtectedRoute path="/About" exact component={About} />
                {/* <ProtectedRoute path="/Login" exact component={Login} openPage /> */}
                <ProtectedRoute path="*" exact component={PageNotFound} openPage />
            </Switch>
        </AnimatePresence>
    )
}