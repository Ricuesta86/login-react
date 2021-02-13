import React from 'react';
import { Link } from 'react-router-dom';

const FormLogin = () => {
  return (
    <form>
      <input type="text" name="mail" id="mail" className=""/>
      <input type="text" name="password" id="password" />
      <div className="row">
        <div className="col-6">
          <Link to="/reassign">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="col-6">
          <input type="checkbox" name="checkbox" id="checkbox" /> Mantenerme
          conectado.
        </div>
      </div>

      <button className="btn btn-primary btn-block">Ingresar</button>
      <p>También puedes iniciar con tus redes</p>
    </form>
  );
};

export default FormLogin;
