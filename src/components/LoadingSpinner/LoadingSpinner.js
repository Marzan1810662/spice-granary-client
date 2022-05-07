import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div>
            <div className='w-100 my-5 py-5'>
                <Spinner animation="border" variant="warning" />
            </div>
        </div>
    );
};

export default LoadingSpinner;