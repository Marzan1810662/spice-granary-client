import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div>
                <h2 className='fw-bold'>Spice Granary</h2>
                <h4 className='fw-bold'>Inventory management Website</h4>
                <button className='banner-btn'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;