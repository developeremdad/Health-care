import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1>home page</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;