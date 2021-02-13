import React from 'react';
import { Link } from 'react-router-dom';

const ReassignScreen = () => {
    return (
        <div className="card col-6 bg-secondary p-5">
            <p>Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraceña. Este enlace sera valido por una hora.</p>
            <form>
                <input type="text"
                name="mail"
                placeholder ="Correo electrónico"
                
                />
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-segundary">
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
