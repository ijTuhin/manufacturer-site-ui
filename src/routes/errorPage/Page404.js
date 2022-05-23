import React from 'react';
import { rightArrow } from '../../index';
import './Page404.css';
const Page404 = () => {
    return (
        <div className='App py-20'>
            <h2 className='font-medium font-sans mb-1'><span className='animate__tada animated tada animate__infinite font-semibold text-sky-600 text-9xl'>404</span><br />Page Not Found</h2>
            <h2 className='font-medium text-xs font-sans mb-16'>The resource requested does not exist or may have removed from this server!</h2>
            <div>
                <button className='flex mx-auto items-center'><span>Back to Home</span> <img src={rightArrow} className="inline-block  arrow w-4 mt-[1px] mx-2" alt="" /></button>
            </div>
        </div>
    );
};

export default Page404;