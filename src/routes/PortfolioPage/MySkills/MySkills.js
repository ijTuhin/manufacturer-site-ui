import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDotCircle, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';
AOS.init();

const MySkills = () => {
    return (
        <div className='w-full h-[100%]'>
            <div className='flex justify-center -mt-24 mb-20'>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
                <h1 className='text-gray-500 text-2xl font-medium font-serif'>Skills & Technologies</h1>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
            </div>
            <div data-aos="fade-right" data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                data-aos-mirror="true" className='flex justify-start ml-[13%] mb-[10%]'>
                <div class="relative mb-72">
                    <div className='w-72 border border-gray-400 text-gray-300 h-[350px] absolute top-2 left-2 z-0'></div>
                    <div class="rounded shadow-lg w-72 p-3 border border-gray-400 text-gray-300 h-[350px] bg-gray-800 absolute z-10">
                        <div className='border-b-4 border-gray-300 py-2 mx-3 my-2'>
                            <h1 className='text-xl'><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> FRONT-END</h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-offset="200"
                            data-aos-delay="75"
                            data-aos-duration="900"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true" className='mx-3'>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> HTML5</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> CSS3</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> JavaScripts</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> Reacj.js</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                data-aos-mirror="true" className='flex justify-end mr-[30%] mb-[10%]'>
                <div class="relative mb-72">
                    <div className='w-72 border border-gray-400 text-gray-300 h-[350px] absolute top-2 left-2 z-0'></div>
                    <div class="rounded shadow-lg w-72 p-3 border border-gray-400 text-gray-300 h-[350px] bg-gray-800 absolute z-10">
                        <div className='border-b-4 border-gray-300 py-2 mx-3 my-2'>
                            <h1 className='text-xl'><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> BACK-END</h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-offset="200"
                            data-aos-delay="75"
                            data-aos-duration="900"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true" className='mx-3'>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> Node.js</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> Express.js</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> MongoDb</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> PHP</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> MySQL</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-offset="200"
                data-aos-delay="40"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                data-aos-mirror="true" className='flex justify-start ml-[13%] mb-[10%]'>
                <div class="relative mb-72">
                    <div className='w-72 border border-gray-400 text-gray-300 h-[350px] absolute top-2 left-2 z-0'></div>
                    <div class="rounded shadow-lg w-72 p-3 border border-gray-400 text-gray-300 h-[350px] bg-gray-800 absolute z-10">
                        <div className='border-b-4 border-gray-300 py-2 mx-3 my-2'>
                            <h1 className='text-xl'><FontAwesomeIcon icon={faTabletScreenButton}></FontAwesomeIcon> Ui Design</h1>
                        </div>
                        <div data-aos="zoom-in" data-aos-offset="200"
                            data-aos-delay="75"
                            data-aos-duration="900"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true" className='mx-3'>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> Bootstrap</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> TailwindCSS</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> Tailwind elements</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> daisyUI</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> Material-UI</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> AOS</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> react AOS</h3>
                            <h3><FontAwesomeIcon className='w-2' icon={faDotCircle}></FontAwesomeIcon> react Spring</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;