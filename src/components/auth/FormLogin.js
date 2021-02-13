import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const FormLogin = () => {

 
  const [ formValue, handleInputChange ] = useForm({
    email:'',
    password:''
  });

  const { email,password } = formValue;

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email,password);
  }


  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" 
          name="email" 
          id="email" 
          className=""
          value= { email }
          onChange={ handleInputChange }
          />
      <input type="password" 
          name="password"
          id="password"
          value={ password }
          onChange={ handleInputChange }          
          />
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
