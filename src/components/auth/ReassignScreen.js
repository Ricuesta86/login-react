import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const ReassignScreen = () => {

    const [formValue, handleInputChange ]= useForm({
        email:''
    });

    const { email }= formValue;

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }






    return (
        <div className="card col-sm-12 col-md-8 col-lg-6 bg-dark p-lg-5 p-sm-5 p-md-4 p-5">
            <h2 className="reassign">Reasignar contraceña</h2>
            <p className="text-white">Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraceña. Este enlace sera valido por una hora.</p>
            <form onSubmit = { handleSubmit }>
                <div className="py-2">
                    <input type="text"
                        name="email"
                        placeholder ="Correo electrónico"
                        className="form-control"
                        value = { email }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-secondary">
                            Enviar enlace
                        </button>
                    </div>
                    <div className="col-6 text-right">
                        <Link to="/login" className="link ">Iniciar sesión</Link>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ReassignScreen;
