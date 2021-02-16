import React from 'react';
import { useDispatch } from 'react-redux'; 
import { startGoogleLogin } from '../../actions/auth';

const OthersRegister = () => {

    const dispatch = useDispatch();

    const handleGoogleLogin = () =>{
        dispatch( startGoogleLogin() );
    }




    return (
        <div className="row">
            <div className="col-6 text-center">
                <button className="btn btn-secondary">Ingresar con Facebook</button>
            </div>
            <div className="col-6 text-center">
                <button className="btn btn-secondary" onClick={ handleGoogleLogin }>Ingresar con Google</button>
            </div>
        </div>
    );
};

export default OthersRegister;
