import React from 'react';
import { banner1 } from '../../../index';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutUs = () => {
    return (
        <div className='relative flex'>
            <div className='bg-sky-800 w-[35%] h-[500px]'>
                <ScrollAnimation animateIn="animate__backInLeft animate__slower">
                    <img className='md:w-96 w-44 relative left-[35%] top-10' src={banner1} alt='' />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__backInRight animate__slow">
                    <img className='md:w-96 w-44 relative left-[70%] right-10 bottom-14' src={banner1} alt='' />
                </ScrollAnimation>
            </div>
            <div className='w-[35%] ml-auto mr-[10%] my-auto'>
                <h2 className='text-5xl font-serif'>About Us</h2>
                <hr className='w-[75%] bg-gray-500 my-1' />
                <p>ASUS is passionate about technology and driven by innovation. We dream, we dare and we strive to create an effortless and joyful digital life for everyone. We're always in search of incredible ideas and experiences, and we aspire to deliver the incredible in everything we do. ASUSTeK COMPUTER INC. and its affiliated entities companies use cookies and similar technologies to perform essential online functions, such as authentication and security. You may disable these by changing your cookies setting through browser, but this may affect how this website functions.
                    Also, ASUS uses some analytics, targeting, adverting and video-embedded cookies provided by ASUS or third parties. Please click a button here to choose your preference for these types of cookies. Please note that you can configure cookies settings by accessing the browser you install at any time. </p>
            </div>
        </div>
    );
};

export default AboutUs;