import React from 'react';
import { portfolio } from '../../../index';
const AboutMe = () => {
    return (
        <div>
            <div className='w-full flex justify-center h-screen'>
                <div className='w-[50%] h-[50%] ml-16 p-4  mt-14 relative flex flex-col items-start justify-start'>
                    <div className='w-full my-2.5'>
                        <h1 className='text-gray-500 text-2xl font-medium'>About me</h1>
                        <div className='ml-28 -mt-2 border-t-2 border-gray-700 w-[70%]'></div>
                        <h1 className='text-gray-500 -mt-0.5 ml-[85%] text-sm'>ijTuhin638@gmail.com</h1>
                        <h1 className='text-gray-500 ml-[85%] text-xs'>+880-1316797638</h1>
                    </div>
                    <h2 className='text-gray-500 text-sm'>Hello! My name is Israt and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</h2>
                    <h2 className='text-gray-500 text-sm'>My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button. My Educational Qualifications are as follows,</h2>
                    <div className='my-2.5'>
                        <h1 className='text-lg'>- B.Sc in Computer Science & Engineering</h1>
                        <h1 className='text-gray-600 mx-3'> International Islamic University Chittagong, <span className='text-sm'>Sitakundo, Chattagram</span></h1>

                    </div>
                    <div className='mb-2.5'>
                        <h1 className='text-lg'>- Higher Secondary Certificate</h1>
                        <h1 className='text-gray-600 mx-3'> Hajera-Taju University College, <span className=' text-sm'>Chandgaon, Chattagram</span></h1>

                    </div>
                    <div className='mb-2.5'>
                        <h1 className='text-lg'>- Secondary School Certificate</h1>
                        <h1 className='text-gray-600 mx-3'> Bakolia Government High School, <span className='text-sm'>Bakolia, Chattagram</span></h1>

                    </div>

                </div>
                <div className='w-96 h-96 ml-16 mt-20 relative'>

                    <div className='border-0 z-10 rounded bg-gray-500 w-[12em] h-[12em] absolute top-4 left-14'>
                        <img src={portfolio} alt="" />
                    </div>
                    <div className='border border-gray-500 rounded w-[12em] h-[12em] absolute top-6 left-16'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;