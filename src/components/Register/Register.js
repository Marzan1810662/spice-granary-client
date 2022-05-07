import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [inputError, setInputError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { register, errors, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const onSubmit = async (data) => {
        console.log("RESULT", data);
        const name = data.Name;
        const email = data.Email;
        const password = data.Password;
        const confirmPassword = data.confirmPassword;
        console.log(name, email, password, confirmPassword);

        if (password !== confirmPassword) {
            setInputError('Passwords do not match');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };
    console.log(user);

    const from =  location?.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }

    let registerErrorElement;
    if (registerError) {
        registerErrorElement = <p className='text-danger'>Error:{registerError.message}</p>
    }

    return (
        <div className='register-form-main-container d-flex align-items-center 
        justify-content-evenly'>
            <div className='img-container'>
            </div>
            <div className='form-conatiner container my-5 mx-3 mx-md-5'>
                <h2>Register</h2>
                <form className='main-form d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-start'>Name</label>
                    <input className='main-form-input mb-2'
                        type="text"
                        {...register("Name", { required: true, maxLength: 80, pattern: /^[0-9a-zA-Z]+$/ })}
                    />
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
                    <label className='text-start'>Confirm Password</label>
                    <input className='main-form-input mb-2'
                        type="password"
                        {...register("confirmPassword", {
                            required: true
                        })}
                    />
                    <p className=' text-danger'>{inputError}</p>
                    {registerErrorElement}
                    <input className='register-btn my-2' type="submit" value="Register" />
                </form>
                <h6 className='mb-3'>Already Have An Account?<span className='login-link'><Link to='/login'>Login</Link></span> </h6>
                <SocialLogin />
            </div>
        </div>

    );

};

export default Register;