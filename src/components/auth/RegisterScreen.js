import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import validator  from "validator";
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

const RegisterScreen = () => {

    //refactorizar usando useState en vez de redux para el mensaje de error

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui)
    const { msgError }  = useSelector( state => state.ui);    
    
    const [ formValues, handInputChange ] = useForm({
        name:'',
        email:'',
        password:'',
        confirm:''
    });

    const { name, email, password, confirm } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if( isFormValid()){
           dispatch(startRegisterWithEmailPasswordName(email, password, name) );
        }
    }

    const isFormValid = () => {

        if(name.trim().length === 0){
            dispatch( setError('Name is required' ));
            console.log('Name is required');
            return false;
        }else if ( !validator.isEmail ( email )){            
            dispatch( setError('Email is not valid' ));          
            return false;
        } else if( password !== confirm || password.length < 5){
            dispatch( setError( 'password should be at least 6 characters and match each other' ));                   
            return false;
        }  
        dispatch( removeError() );      
        return true;
    }

    return (
        <>
        <h3 className="auth__tittle">Register</h3>

        <form onSubmit = { handleRegister }>

       { 
            msgError &&
            (
                <div className="auth__alert-error">
                    { msgError }
                </div>
            )
            
        }

        <input 
            type = "text"
            placeholder = "Name"
            name = "name"
            className= "auth__input"
            autoComplete = "off"
            value = { name }
            onChange = { handInputChange } 

            />

            <input 
            type = "text"
            placeholder = "Email"
            name = "email"
            className= "auth__input"
            autoComplete = "off"
            value = { email }
            onChange = { handInputChange }
            />

            <input 
            type = "password"
            placeholder = "Password"
            name = "password"
            className= "auth__input"
            value = { password }
            onChange = { handInputChange }
            />

            <input 
            type = "password"
            placeholder = "confirm password"
            name = "confirm"
            className= "auth__input"
            value = { confirm }
            onChange = { handInputChange }
            />

            <button
                type= "submit"
                className="btn btn-primary btn-block mb-5"   
                disabled = { loading }             
            >
                Register
            </button>       

            <Link 
                to="/auth/login"
                className="link"
            >
                Alredy registered?
            </Link>

        </form>
    </>
    )
}

export default RegisterScreen
