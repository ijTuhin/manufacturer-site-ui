import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='homepage-mid-bg bg-fixed bg-no-repeat w-screen bg-cover bg-[url("https://img.freepik.com/free-photo/woman-works-with-laptop-home-holds-computer-mouse-her-left-hand_1150-43630.jpg?t=st=1653225169~exp=1653225769~hmac=00d75d7289fb993e9acf78045ce8a52b030e0113a7b025a87610501360c3c0a3&w=996")]'>
                <BusinessSummary></BusinessSummary>
                <Contact></Contact>
                <BusinessSummary></BusinessSummary>
            </div>
        </div>
    );
};

export default Home;