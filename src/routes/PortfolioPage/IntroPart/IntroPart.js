import React from 'react';
import './IntroPart.css';
import { downArrow } from '../../../index';
import { Link } from 'react-router-dom';
const IntroPart = () => {
    return (
        <div className='bubble text-white w-full flex flex-col justify-center h-screen' id='top'>
            <div className='writing mx-auto'>
                <h1 className='font-serif font-medium text-xl mb-0.5 text-I'>
                    Hello, I am
                </h1>
                <h1 className='font-serif font-semibold text-amber-400/80 text-6xl mb-0.5 text-II'>
                    Israt Jahan Tuhin
                </h1>
                <h1 className='font-medium text-xl mb-0.5 text-III'>
                    & I'm working with <span className='text-sky-600 text-2xl'>FRONT-END WEB DEVELOPMENT</span>
                </h1>
            </div>
            <br /><br />
            <Link to='/' className='flex mx-auto items-center hover:text-sky-600 mt-10'><img src={downArrow} className="right-arrow w-8 mt-[2px] mx-3" alt="" /> Back to Home </Link>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
        </div>
    );
};

export default IntroPart;