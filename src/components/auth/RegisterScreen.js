import React from 'react';
import { Link } from 'react-router-dom';
import FormRegister from './FormRegister';
import NavForm from './NavForm';
import OthersRegister from './OthersRegister';

const RegistrerScreen = () => {
    return (
        <div className="card col-sm-12 col-md-8 col-lg-6 bg-dark p-lg-5 p-sm-5 p-md-4 p-5">
            <NavForm />
            <FormRegister/>
            <OthersRegister/>   
            <p className ="text-white text-center pt-4 terminos">Al registrate, estas aceptando <Link to="" >Términos y condiciones</Link> y la 
            <Link to="" > Política de privacidad y protección de datos</Link> de COMFECO
            </p>  
        </div>
    );
};

export default RegistrerScreen;
