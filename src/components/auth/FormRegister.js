import React from 'react';

const FormRegister = () => {
    return (
        <form>
        <input type="text" name="nick" id="nick" />            
        <input type="text" name="mail" id="mail" />
        <input type="password" name="password" id="password" />
        <input type="password" name="password-verificar" id="password-verificar" />  
        <button className="btn btn-primary btn-block">Crear una cuenta</button>
        <p className="text-center">O regístrate usando</p>
      </form>
    );
};

export default FormRegister;
