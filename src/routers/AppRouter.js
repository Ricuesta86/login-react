import React,{ useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';

import LoginScreen from '../components/auth/LoginScreen';
import ReassignScreen from '../components/auth/ReassignScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import { PrivateRoute } from './PrivateRoute';
import Footbar from '../components/ui/Footbar';
import { Navbar } from '../components/ui/Navbar';
import { login } from '../actions/auth';
import Comfeco from '../components/Comfeco';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {


    const dispatch = useDispatch();


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user?.uid){
                dispatch(login( user.uid, user.displayName ));
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
        })
    }, [ dispatch, isLoggedIn ]);


    return (
        <Router>
            <div>
            <Navbar />
                <div className="container-md d-flex d-flex justify-content-center align-items-center flex-wrap p-2 p-md-4 app">                    
                    <Switch>
                        <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated ={isLoggedIn} />
                        <PublicRoute exact path="/register" component={ RegisterScreen } isAuthenticated ={isLoggedIn} />
                        <PublicRoute exact path="/reassign" component={ ReassignScreen } isAuthenticated ={isLoggedIn} />
                        <PrivateRoute  
                            isAuthenticated ={isLoggedIn}
                            path="/" 
                            component={ Comfeco } 
                        />
                    </Switch>
                </div>
                <Footbar />
            </div>
        </Router>
    )
}

export default AppRouter
