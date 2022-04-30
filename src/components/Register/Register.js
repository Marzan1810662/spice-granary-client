import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log("RESULT", data);
    };
    // console.log(errors);

    return (
        <div className='d-flex align-items-center 
        justify-content-evenly main-container'>
            <div className='img-container'>
                {/* <img src="https://thumbs.dreamstime.com/z/various-spices-white-wooden-background-top-view-copy-space-56315975.jpg" alt="" /> */}
            </div>
            <div className='form-conatiner container my-5 mx-3 mx-md-5'>
                <h2>Register</h2>
                <form className='main-form d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-start'>Name</label>
                    <input className='main-form-input mb-2'
                        type="text"
                        {...register("Name", { required: true, maxLength: 80, pattern: /^[A-Za-z]+$/ })}
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
                        {...register("Pasword", {
                            required: true
                        })}
                    />
                    <label className='text-start'>Confirm Password</label>
                    <input className='main-form-input mb-2'
                        type="password"
                        {...register("Confirm Pasword", {
                            required: true
                        })}
                    />
                    <input className='register-btn my-2' type="submit" value="Register" />
                </form>
                <h6 className='mb-3'>Already Have An Account?<span className='login-link'><Link to='/login'>Login</Link></span> </h6>
                <SocialLogin />
            </div>
        </div>

    );

};

export default Register;