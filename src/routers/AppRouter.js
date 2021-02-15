import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import LoginScreen from '../components/auth/LoginScreen';
import ReassignScreen from '../components/auth/ReassignScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import Footbar from '../components/ui/Footbar';
import { Navbar } from '../components/ui/Navbar';

const AppRouter = () => {
    return (
        <Router>
            <div>
            <Navbar />
                <div className="container-md d-flex d-flex justify-content-center align-items-center flex-wrap p-2 p-md-4 app">                    
                    <Switch>
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route exact path="/register" component={ RegisterScreen }/>
                        <Route exact path="/reassign" component={ ReassignScreen } />
                        <Route  path="/" component={ LoginScreen } />
                    </Switch>
                </div>
                <Footbar />
            </div>
        </Router>
    )
}

export default AppRouter
