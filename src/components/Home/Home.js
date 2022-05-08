import React from 'react';
import Banner from '../Banner/Banner';
import Chart from '../Chart/Chart';
import FAQ from '../FAQ/FAQ';
import Inventory from '../Invenvotory/Inventory';
import PageTitle from '../PageTitle/PageTitle';
import './Home.css';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'/>
            <Banner />
            <Inventory/>
            <Chart />
            <FAQ/>
        </div>
    );
};

export default Home;