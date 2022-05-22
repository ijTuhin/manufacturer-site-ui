import React from 'react';
import { banner1 } from '../../../index';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <div class="banner-heading">
                <div class="banner-heading-inner w-full p-3 bg-slate-300/60 md:mt-40 mt-12 border-l-4 border-blue-800">
                    <div class="first-txt">
                        <div class="first-txt-inner md:text-4xl text-lg text-sky-600">Keyframé</div>
                    </div>
                    <div class="second-txt">
                        <div class="second-txt-inner md:text-6xl text-2xl text-sky-700">Artistes</div>
                    </div>
                </div>
            </div>
            <div class="image">
                <img className='md:w-96 w-44 relative z-40' src={banner1} alt='' />
            </div>
        </div>
    );
};

export default Banner;