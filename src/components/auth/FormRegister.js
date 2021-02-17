import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';


import validator from 'validator';





import useForm from '../../hooks/useForm';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const FormRegister = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui)

    const [formValue, handleInputChange ] = useForm({
      nick:'',
      email:'',
      password:'',
      passwordVerificar:''
    });


    const { nick, email, password, passwordVerificar } = formValue;

    const handleSubmit = (e) => {
      e.preventDefault();

      if( isFormValid()){
        dispatch(startRegisterWithEmailPasswordName(email,password,nick));
      }

    }


    const isFormValid = ()=>{

      if( nick.trim().length < 3){
        dispatch( setError('Se requiere el nick'));
        return false;
      }else if(!validator.isEmail(email)){
        dispatch( setError('El Email no es valido'));   
        return false;
      }else if(password!==passwordVerificar || password < 6){
        dispatch( setError('La contraceña debe tener mas de 6 caracteres y considir con la otra.'));
        return false;
      }

      dispatch(removeError);
      return true;
    }

    return (
        <>
          {
            msgError &&
            (
              <div className="">
                msgError
              </div>
            )
          }

          <form onSubmit={ handleSubmit }>
            <div className="py-2">
              <input type="text" 
                name="nick" 
                id="nick"
                className="form-control"
                placeholder ="Nick"
                value = { nick } 
                onChange={ handleInputChange }
              />  
            </div>
            <div className="py-2">
              <input type="text" 
                name="email" 
                id="email" 
                className="form-control"
                placeholder ="Correo electrónico"
                value={ email }
                onChange = { handleInputChange }
              />
            </div>
            <div className="py-2">
              <input type="password" 
                name="password" 
                id="password" 
                className="form-control"
                placeholder ="Contraceña"
                value={ password }
                onChange = { handleInputChange }
              />
            </div>
            <div className="py-2">
              <input type="password" 
                name="passwordVerificar" 
                id="passwordVerificar" 
                className="form-control"
                placeholder ="Verificar la Contraceña"
                value = { passwordVerificar }
                onChange ={ handleInputChange }
              /> 
            </div>
  
          <div className="py-1">
            <button className="btn btn-secondary btn-block">Crear una cuenta</button>
          </div>
          <p className="text-center py-1 text-white font-weight-bold">O regístrate usando</p>
        </form>
      </>
    );
};

export default FormRegister;
