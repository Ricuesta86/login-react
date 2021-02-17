import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import useForm from '../../hooks/useForm';

const FormLogin = () => {

  const dispatch = useDispatch(); 

  const {loading} = useSelector(state => state.ui)
 
  const [ formValue, handleInputChange ] = useForm({
    email:'ricuesta1986@gmail.com',
    password:'1234567'
  });

  const { email,password } = formValue;

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch( startLoginEmailPassword(email,password));
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
        <button className="btn btn-secondary btn-block py-2" disabled={ loading }>Ingresar</button>
      </div>
      <p className="text-center py-2 text-white font-weight-bold">También puedes iniciar con tus redes</p>
    </form>
  );
};

export default FormLogin;
