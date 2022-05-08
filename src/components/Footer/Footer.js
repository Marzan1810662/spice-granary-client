import { faContactCard, faEnvelope, faLink, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className='footer-container'>
            <div className='container mt-2 pt-1 pt-md-4 d-flex flex-column flex-md-row align-items-baseline justify-content-around'>
                <div className='title-div mx-2 order-3 order-md-1'>
                    <h1 className='fw-bold mt-md-5 pt-2'>Spice Granary</h1>
                    <p>Spice Granary is a inventory management system for spices.
                        <br />
                        An easier and quick solution for delivery and stock updates.</p>
                </div>
                <div className='quick-links-div mt-4 mt-md-0 mx-auto order-1 order-md-2'>
                    <h5><FontAwesomeIcon icon={faLink} /> Quick Links</h5>
                    <div className='d-flex flex-column'>
                    <Link className='fw-bold ms-lg-4' to={'/'}>
                        Home</Link>
                    <Link className='fw-bold ms-lg-4' to={'/blogs'}>
                        Blogs</Link>
                    </div>
                </div>
                <div className='contact-div text-md-start mt-4 mt-md-0 mx-2 order-2 order-md-3'>
                    <h5><FontAwesomeIcon icon={faContactCard} /> Contact us</h5>
                    <p>
                        <FontAwesomeIcon icon={faLocationDot} /> Address
                        <br />
                        128 Patterson Street,Texas, USA
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> Phone
                        <br />
                        +281-222-0792
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                        <br />
                        spicegranary92@mail.com
                    </p>
                </div>
            </div>
            <p className='mb-0'>copyright  &copy; {currentYear} Spice Granary</p>
        </div>
    );
};

export default Footer;