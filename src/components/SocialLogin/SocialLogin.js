import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div className='social-login-container'>
            <div className='d-flex align-items-center '>
                <span></span>
                <h6>Or</h6>
                <span></span>
            </div>
            <div className='d-flex flex-column'>
                <button className='google-login-btn my-2'><FontAwesomeIcon icon={faGoogle} /> Continue With Google</button>
                <button className='facebook-login-btn my-2'><FontAwesomeIcon icon={faFacebookF} /> Continue With Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;