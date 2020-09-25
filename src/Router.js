import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from  './Components/Pages/Home'
import Login from './Components/Pages/Login'
import {ProtectedRoute} from './ProtectedRoute'
export const AppRouter = () => {
    return (
        <Router basename="/Portfolio">
            <Switch>
                <ProtectedRoute path="/" exact component={Home}/>
                <Route path="/Login" exact component={Login}/>
                <ProtectedRoute path="/Home" exact component={Home}/>
            </Switch>
        </Router>
    )
}
