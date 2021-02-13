import React from 'react';
import FormLogin from './FormLogin';
import NavForm from './NavForm';
import OthersRegister from './OthersRegister';

const LoginScreen = () => {
    return (
        <>
            
            <div className="card col-6 bg-secondary p-5">
                <NavForm />
                <FormLogin />
                <OthersRegister />
            </div>
        </>
    );
};

export default LoginScreen;
