import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Photography from '../Photography/Photography';
import Services from '../Services/Services';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Services></Services>
            <Banner></Banner>
            <About></About>
            <Photography></Photography>
        </div>
    );
};

export default Home;