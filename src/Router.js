import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Login from './Components/Pages/Login'
import { ProtectedRoute } from './ProtectedRoute'
import  ForgotPassword from  './Components/Pages/ForgotPassword'
import  RegisterUser from './Components/Pages/RegisterUser'
import PageNotFound from './Components/PageNotFound'
export const AppRouter = () => {
    return (
        <Router basename="/Portfolio">
            <Switch>
                <Route path="/Login" exact component={Login} />
                <Route path="/ForgotPassword" exact component={ForgotPassword} />
                <Route path="/RegisterUser" exact component={RegisterUser} />
                <ProtectedRoute path="/" exact component={Home} />
                <ProtectedRoute path="/Home" exact component={Home} />
                <Route path="*" exact component={PageNotFound} />
            </Switch>
        </Router>
    )
}
