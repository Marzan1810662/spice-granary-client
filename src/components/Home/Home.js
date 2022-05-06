import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Invenvotory/Inventory';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventory/>
        </div>
    );
};

export default Home;