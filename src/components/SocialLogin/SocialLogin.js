import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css';

const SocialLogin = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleLoading) {
        return <p>loading ...</p>
    }

    let authErrorElement;
    if (googleError) {
        authErrorElement = <p className='text-danger'>Error: {googleError.message}</p>
    }

    if (googleUser) {
        navigate('/');
    }
    return (
        <div className='social-login-container'>
            <div className='d-flex align-items-center '>
                <span></span>
                <h6>Or</h6>
                <span></span>
            </div>
            {authErrorElement}
            <div className='d-flex flex-column'>
                <button onClick={() => signInWithGoogle()} className='google-login-btn my-2'><FontAwesomeIcon icon={faGoogle} /> Continue With Google</button>
                <button className='facebook-login-btn my-2'><FontAwesomeIcon icon={faFacebookF} /> Continue With Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;