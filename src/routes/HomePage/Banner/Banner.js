import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <div class="banner-heading">
                <div class="banner-heading-inner w-full p-3 bg-slate-300/60 my-20 border-l-4 border-blue-800">
                    <div class="first-txt">
                        <div class="first-txt-inner text-4xl text-sky-600">Keyframé</div>
                    </div>
                    <div class="second-txt">
                        <div class="second-txt-inner text-6xl text-sky-700">Artistes</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;