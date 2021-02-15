import React from 'react';
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import useForm from '../../hooks/useForm';

const FormLogin = () => {

  const dispatch = useDispatch(); 
 
  const [ formValue, handleInputChange ] = useForm({
    email:'',
    password:''
  });

  const { email,password } = formValue;

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch( login(123456,'Ricuesta'));
  }


  return (
    <form onSubmit={ handleSubmit }>
      <div className="py-2">
        <input type="text" 
          name="email" 
          id="email" 
          className="form-control"
          placeholder ="Correo electrónico"
          value= { email }
          onChange={ handleInputChange }
        />
      </div>
      <div className="py-2">
              <input type="password" 
          name="password"
          id="password"
          className="form-control"
          placeholder ="Contraceña"
          value={ password }
          onChange={ handleInputChange }          
          />
      </div>

      <div className="row py-3 text-sm-center text-md-center" >
        <div className="col-sm-12 col-md-8 col-lg-6">
          <Link to="/reassign" className="link">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-6 text-white ">
          <input type="checkbox" name="checkbox" id="checkbox" /> Mantenerme
          conectado.
        </div>
      </div>
      <div className="py-2">
        <button className="btn btn-secondary btn-block py-2">Ingresar</button>
      </div>
      <p className="text-center py-2 text-white font-weight-bold">También puedes iniciar con tus redes</p>
    </form>
  );
};

export default FormLogin;
