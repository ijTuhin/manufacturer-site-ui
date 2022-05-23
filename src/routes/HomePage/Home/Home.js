import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Banner from '../Banner/Banner';
import { whatsapp } from '../../../index';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Contact from '../Contact/Contact';
import AboutUs from '../AboutUs/AboutUs';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='homepage-mid-bg bg-fixed bg-no-repeat w-screen bg-cover bg-[url("https://img.freepik.com/free-photo/woman-works-with-laptop-home-holds-computer-mouse-her-left-hand_1150-43630.jpg?t=st=1653225169~exp=1653225769~hmac=00d75d7289fb993e9acf78045ce8a52b030e0113a7b025a87610501360c3c0a3&w=996")]'>
                <div className='bg-white'>
                    <AboutUs></AboutUs>
                </div>
                <BusinessSummary></BusinessSummary>

                {/* ========================================== 
                        Contact section for mobile view 
                ========================================== */}
                <div className='py-10 col-span-3 bg-black/40 block relative md:hidden'>
                    <ScrollAnimation animateIn="animate__fadeInLeftBig animate__faster">
                        <h2 className='text-4xl font-serif text-white relative left-16 top-5 contact-txt'>Contact us</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInRightBig animate__faster">
                        <div className='geeks mt-4 relative left-16 top-5'></div>
                    </ScrollAnimation>

                    <div className='flex relative left-[38%] top-5'>
                        <div className='w-[28%] h-20 bg-sky-900/90 flex items-center justify-center'>
                            <img src={whatsapp} className="w-8 mx-3" alt="" />
                            <div className='pr-2'>
                                <h2 className='text-lg font-medium text-white mb-1'>Whatsapp</h2>
                                <p className='text-xs text-gray-100'>+880-1212288909</p>
                            </div>
                        </div>
                        <div className='w-[28%] h-20 bg-slate-900/90 flex items-center justify-center'>
                            <div>
                                <h2 className='text-lg font-medium text-white mb-1'><span className="w-8 text-lg font-medium text-white mr-2 pl-1"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span> Phone</h2>
                                <p className='text-xs text-gray-100'>+880-1212288909</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ========================================== 
                        Contact section for mobile view 
                ========================================== */}


                <Contact></Contact>

            </div>
        </div>
    );
};

export default Home;