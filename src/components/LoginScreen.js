import React from 'react'

const LoginScreen = () => {
    return (
        <>
            
            <form className="card col-6 bg-secondary p-5">
                <h1>Iniciar seccion | Registrate</h1>

                <input 
                    type="text"
                    name="mail"
                    id="mail"
                />

                <input 
                    type="text"
                    name="password"
                    id="password"
                    
                />  
                <div className="row">
                    <div className="col-6">
                        <p>¿Olvidaste tu contraseña?</p> 
                    </div>
                    <div className="col-6">
                        <input type="checkbox" 
                            name="checkbox" 
                            id="checkbox"/> Mantenerme conectado.
                    </div>
                                   
                </div>

                <button className="btn btn-primary btn-block">Ingresar</button>
                <p>También puedes iniciar con tus redes</p>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-primary">Ingresar con Facebook</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary">Ingresar con Google</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginScreen
