import React from 'react';
import validator from 'validator';
import useForm from '../../hooks/useForm';

const FormRegister = () => {

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
        console.log( "Formulario correcto" );
      }

    }


    const isFormValid = ()=>{

      if( nick.trim().length < 3){
        console.log('Se requiere el nick');
        return false;
      }else if(!validator.isEmail(email)){
        console.log('El Email no es valido');
        return false;
      }else if(password!==passwordVerificar || password < 6){
        console.log('La contraceña debe tener mas de 6 caracteres y considir con la otra.');
        return false;
      }

      return true;
    }

    return (
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
    );
};

export default FormRegister;
