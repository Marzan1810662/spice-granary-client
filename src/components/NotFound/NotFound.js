import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found-page-container'>
            <PageTitle title='404- Notfound'/>
            <div className='not-found-content-container'>
                <h1 className=''>404</h1>
                <h3 className=' fs-3'>Page not Found!</h3>
                <h5 className=' fs-3'>The page you are looking for does not exist or an error occurred</h5>
                <Link to='/'><button className='back-to-home-btn'>Go Back Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;