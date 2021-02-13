import React from 'react';
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
      console.log( nick, email, password, passwordVerificar );
    }


    return (
        <form onSubmit={ handleSubmit }>
        <input type="text" 
          name="nick" 
          id="nick"
          placeholder ="Nick"
          value = { nick } 
          onChange={ handleInputChange }
        />            
        <input type="text" 
          name="email" 
          id="email" 
          placeholder ="Correo electrónico"
          value={ email }
          onChange = { handleInputChange }
        />
        <input type="password" 
          name="password" 
          id="password" 
          placeholder ="Contraceña"
          value={ password }
          onChange = { handleInputChange }
        />
        <input type="password" 
          name="passwordVerificar" 
          id="passwordVerificar" 
          placeholder ="Verificar la Contraceña"
          value = { passwordVerificar }
          onChange ={ handleInputChange }
        />  
        <button className="btn btn-primary btn-block">Crear una cuenta</button>
        <p className="text-center">O regístrate usando</p>
      </form>
    );
};

export default FormRegister;
