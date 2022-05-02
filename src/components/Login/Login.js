import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const { register, errors, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (data) => {

        const email = data.Email;
        const password = data.Password;

        signInWithEmailAndPassword(email, password)
    };

    if (user) {
        navigate('/')
    }

    let loginErrorElement;
    if (loginError) {
        loginErrorElement = <p className='text-danger'>Error:{loginError.message}</p>
    }
    return (
        <div className='login-form-main-container d-flex align-items-center 
        justify-content-evenly'>
            <div className='form-conatiner container my-5 mx-3 mx-md-5'>
                <h2>Login</h2>
                <form className='main-form d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-start'>Email</label>
                    <input className='main-form-input mb-2'
                        type="email"
                        {...register("Email", {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                    />
                    <label className='text-start'>Password</label>
                    <input className='main-form-input mb-2'
                        type="password"
                        {...register("Password", {
                            required: true
                        })}
                    />
                    {loginErrorElement}
                    <input className='login-btn my-2' type="submit" value="Login" />
                </form>
                <h6 className='mb-3'>Already Have An Account?<span className='register-link'><Link to='/register'>Register Now</Link></span> </h6>
                <SocialLogin />
            </div>
            <div className='img-container'>
            </div>
        </div>

    );;
};

export default Login;