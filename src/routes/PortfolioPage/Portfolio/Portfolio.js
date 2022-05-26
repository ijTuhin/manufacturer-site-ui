import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import IntroPart from '../IntroPart/IntroPart';
import MySkills from '../MySkills/MySkills';
import OtherLinks from '../OtherLinks/OtherLinks';
import PortfolioNavbar from '../PorfolioNavBar/PorfolioNavBar';
import Projects from '../Projects/Projects';

const Portfolio = () => {
    return (
        <div className='relative bg-gray-800 text-gray-500'>
            <IntroPart></IntroPart>
            <PortfolioNavbar />
            <div className='' id='main-body'>
                <AboutMe></AboutMe>
                <MySkills></MySkills>
                <Projects></Projects>
                <OtherLinks></OtherLinks>
                <div className='relative z-20 homepage-mid-bg bg-fixed bg-no-repeat w-screen bg-cover bg-[url("https://img.freepik.com/free-photo/woman-works-with-laptop-home-holds-computer-mouse-her-left-hand_1150-43630.jpg?t=st=1653225169~exp=1653225769~hmac=00d75d7289fb993e9acf78045ce8a52b030e0113a7b025a87610501360c3c0a3&w=996")]'>
                    <div className=''>
                        <ContactMe></ContactMe>
                    </div>

                </div>
                <div className='p-48'>
                    <h1>something written here</h1>
                </div>
                <div className='p-56'>
                    <h2>My portfolio</h2>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;
