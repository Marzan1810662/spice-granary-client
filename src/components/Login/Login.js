import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SocialLogin from '../SocialLogin/SocialLogin';
import './login.css';

const Login = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const onSubmit = (data) => {
        const email = data.Email;
        const password = data.Password;

        signInWithEmailAndPassword(email, password)
    };

    if (loading) {
        return <LoadingSpinner />
    }

    const handleResetPassword = async () => {
        const email = getValues("Email");
        let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        await sendPasswordResetEmail(email);
        toast('An email has been sent to your account. Please update your password.', {
            position: toast.POSITION.BOTTOM_LEFT
        });

    };

    const from = location?.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }

    let loginErrorElement;
    if (loginError || error) {
        loginErrorElement = <p className='text-danger'>Error:{loginError?.message}{error?.message}</p>
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
                    {errors.Email && <span className='text-start text-danger'>This field is required</span>}
                    <p className={`text-start text-danger ${emailError ? 'd-block' : 'd-none'}`}>{emailError}</p>
                    <label className='text-start'>Password</label>
                    <input className='main-form-input mb-2'
                        type="password"
                        {...register("Password", {
                            required: true
                        })}
                    />
                    {errors.Password && <span className='text-start text-danger'>This field is required</span>}
                    <h6 className='mb-3 text-start'>Forgot password?<span className='reset-btn' onClick={handleResetPassword} >Reset</span> </h6>
                    {loginErrorElement}
                    <input className='login-btn my-2' type="submit" value="Login" />
                </form>
                <h6 className='mb-3'>Already Have An Account?<span className='register-link'><Link to='/register'>Register Now</Link></span> </h6>
                <SocialLogin />
                <ToastContainer />
            </div>
            <div className='img-container'>
            </div>
        </div>

    );;
};

export default Login;