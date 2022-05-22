import React from 'react';
import {retails, workers, units, factory} from '../../../index';
const BusinessSummary = () => {
    return (
        <div className='py-10 bg-sky-100'>
            <h2 className='text-3xl text-center md:block hidden'>Our Business Summary in Numbers</h2>
            <h2 className='text-3xl text-center md:hidden block'>Our Business <br />Summary in Numbers</h2>
            <div className='md:flex md:justify-center md:items-center md:mx-56 grid grid-cols-2 gap-y-5 gap-x-3 mx-6 my-12'>
                <div className='flex flex-col justify-center items-center px-2'>
                    <img src={workers} className="w-16" alt=''/>
                    <h1 className='text-4xl text-sky-600 font-medium'>5,000+</h1>
                    <p className='text-xl'>Employees</p>
                    <small className='text-center'>Our strong team of over 5000+ employees are working relentlessly in almost all 64 districts of the country with a mission to generate substantial stakeholder value.</small>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                    <img src={factory} className="w-14" alt=''/>
                    <h1 className='text-4xl text-sky-600 font-medium'>1M</h1>
                    <p className='text-xl'>Factory Space</p>
                    <small className='text-center'>At over 20 factories and industrial zones in Bangladesh, Zaman Group proudly owns over 1,000,000 square feet of factory space in various parts of the country.</small>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                    <img src={retails} className="w-12" alt=''/>
                    <h1 className='text-4xl text-sky-600 font-medium'>0.3M</h1>
                    <p className='text-xl'>Retail Space</p>
                    <small className='text-center'>In order the become to the largest global brand electronics retailer in the country, Zaman Group is targeting exponential growth in terms of retail space acquisition.</small>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                    <img src={units} className="w-16" alt=''/>
                    <h1 className='text-4xl text-sky-600 font-medium'>15</h1>
                    <p className='text-xl'>Units</p>
                    <small className='text-center'>Over the years, the visionary leadership of the Managing Director and his concrete ambitions have made Zaman Group a conglomerate with over 15 different unis.</small>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;