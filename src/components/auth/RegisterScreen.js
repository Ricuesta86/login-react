import React from 'react';
import FormRegister from './FormRegister';
import NavForm from './NavForm';
import OthersRegister from './OthersRegister';

const RegistrerScreen = () => {
    return (
        <div className="card col-6 bg-dark p-5">
            <NavForm />
            <FormRegister/>
            <OthersRegister/>     
        </div>
    );
};

export default RegistrerScreen;
