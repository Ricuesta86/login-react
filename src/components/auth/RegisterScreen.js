import React from 'react';
import FormRegister from './FormRegister';
import NavForm from './NavForm';
import OthersRegister from './OthersRegister';

const RegistrerScreen = () => {
    return (
        <div className="card col-sm-12 col-md-8 col-lg-6 bg-dark p-lg-5 p-sm-5 p-md-4 p-5">
            <NavForm />
            <FormRegister/>
            <OthersRegister/>     
        </div>
    );
};

export default RegistrerScreen;
