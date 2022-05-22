import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='homepage-mid-bg'>
                <BusinessSummary></BusinessSummary>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <BusinessSummary></BusinessSummary>
            </div>
        </div>
    );
};

export default Home;