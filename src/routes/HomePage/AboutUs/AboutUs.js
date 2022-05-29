import React from 'react';
import { banner2,banner3, rightArrow } from '../../../index';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='relative flex md:flex-row flex-col-reverse'>
            <div className='bg-sky-800 md:w-[35%] h-[500px]'>
                <ScrollAnimation animateIn="animate__backInLeft animate__slower">
                    <img className='md:w-96 w-72 relative md:left-[35%] left-[10%] md:top-10 top-24' src={banner2} alt='' />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__backInRight animate__slow">
                    <img className='md:w-96 w-72 relative md:left-[70%] left-[40%] md:bottom-14 -bottom-8' src={banner3} alt='' />
                </ScrollAnimation>
            </div>
            <div className='md:w-[35%] md:ml-auto md:mr-[10%] md:my-auto m-[10%] md:text-base text-sm'>
                <h2 className='md:text-5xl text-4xl font-serif text-sky-700 font-medium'>About Us</h2>
                <hr className='w-[75%] bg-gray-500 my-1' />
                <p>ASUS is passionate about technology and driven by innovation. We dream, we dare and we strive to create an effortless and joyful digital life for everyone. We're always in search of incredible ideas and experiences, and we aspire to deliver the incredible in everything we do. ASUSTeK COMPUTER INC. and its affiliated entities companies use cookies and similar technologies to perform essential online functions, such as authentication and security. You may disable these by changing your cookies setting through browser, but this may affect how this website functions.
                    Also, ASUS uses some analytics, targeting, adverting and video-embedded cookies provided by ASUS or third parties. Please click a button here to choose your preference for these types of cookies. Please note that you can configure cookies settings by accessing the browser you install at any time. <Link to='/about-us' className='text-sky-600 hover:text-sky-700 flex items-center'><span>read more</span> <img src={rightArrow} className="arrow w-3.5 mt-[2.5px] mx-2" alt="" /></Link> </p>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;