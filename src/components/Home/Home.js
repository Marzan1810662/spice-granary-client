import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Invenvotory/Inventory';
import PageTitle from '../PageTitle/PageTitle';
import './Home.css';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'/>
            <Banner />
            <Inventory/>
        </div>
    );
};

export default Home;