import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoginScreen from '../components/LoginScreen';
import RegistrerScreen from '../components/RegistrerScreen';
import Footbar from '../components/ui/Footbar';
import { Navbar } from '../components/ui/Navbar';

const AppRouter = () => {
    return (
        <Router>
            <div>
            <Navbar />
                <div className="container d-flex d-flex justify-content-center align-items-center flex-wrap p-5">                    
                    <Switch>
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route exact path="/registrer" component={ RegistrerScreen }/>
                        {/* <Route exact path="/change" component={ LoginScreen } /> */}
                        <Route  path="/" component={ LoginScreen } />
                    </Switch>
                </div>
                <Footbar />
            </div>
        </Router>
    )
}

export default AppRouter
