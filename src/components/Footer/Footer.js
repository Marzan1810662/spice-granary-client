import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='container pt-4 d-md-flex align-items-center justify-content-around'>
                <div>
                    <h1 className='fw-bold'>Spice Granary</h1>
                </div>
                <div>
                    <h5>Quick Links</h5>
                </div>
                <div><h5>Contact us</h5></div>
            </div>

        </div>
    );
};

export default Footer;