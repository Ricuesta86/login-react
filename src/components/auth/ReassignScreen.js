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
        <div className="card col-6 bg-secondary p-5">
            <p>Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraceña. Este enlace sera valido por una hora.</p>
            <form onSubmit = { handleSubmit }>
                <input type="text"
                    name="email"
                    placeholder ="Correo electrónico"
                    value = { email }
                    onChange={ handleInputChange }
                />
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-secondary">
                            Enviar enlace
                        </button>
                    </div>
                    <div className="col-6">
                        <Link to="/login">Iniciar sesión</Link>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ReassignScreen;
