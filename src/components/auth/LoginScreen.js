import React from 'react';
import FormLogin from './FormLogin';
import NavForm from './NavForm';
import OthersRegister from './OthersRegister';

const LoginScreen = () => {
    return (
        <>
            
            <div className="card col-sm-12 col-md-8 col-lg-6 bg-dark p-lg-5 p-sm-5 p-md-4 p-5">
                <NavForm />
                <FormLogin />
                <OthersRegister />
            </div>
        </>
    );
};

export default LoginScreen;
