import React from 'react';
import './Contact.css';
import { whatsapp } from '../../../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
const Contact = () => {
    return (
        <div className='bg-transparent grid md:grid-cols-6 grid-cols-1 w-screen'>
            <div className='py-10 md:mr-28 col-span-3 bg-black/40 md:block hidden'>
                <ScrollAnimation animateIn="animate__fadeInUpBig">
                    <h2 className='text-4xl font-serif text-white md:relative md:left-28 md:top-20 contact-txt'>Contact us</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInRightBig">
                    <div className='geeks mt-4 md:relative md:left-28 md:top-20'></div>
                </ScrollAnimation>
                <div className='flex md:relative md:left-72 md:top-20'>
                    <div className='w-56 h-36 bg-sky-900/90 flex items-center justify-center'>
                        <img src={whatsapp} className="w-8 mx-3" alt="" />
                        <div>
                            <h2 className='text-2xl font-medium text-white mb-1'>Whatsapp</h2>
                            <p className=' text-gray-100'>+880-1212288909</p>
                        </div>
                    </div>
                    <div className='w-56 h-36 bg-slate-900/90 flex items-center justify-center'>
                        <div>
                            <h2 className='text-2xl font-medium text-white mb-1'><span className="w-8 text-xl font-medium text-white"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span> Phone</h2>
                            <p className=' text-gray-100'>+880-1212288909</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10 md:col-span-3 md:mx-28 mx-auto'>
                <form className='md:w-full w-96'>
                    <div class="form-group mb-1">
                        <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-black/80 bg-clip-padding
        border border-solid border-gray-900
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white" id="exampleInput5"
                            placeholder="Name" />
                    </div>
                    <div class="form-group mb-1">
                        <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-black/80 bg-clip-padding
        border border-solid border-gray-900
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white" id="exampleInput8"
                            placeholder="Email address" />
                    </div>
                    <div class="form-group mb-1">
                        <textarea
                            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-black/80 bg-clip-padding
        border border-solid border-gray-900
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white
      "
                            id="exampleFormControlTextarea13"
                            rows="5"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className='w-full flex justify-end items-end'>
                        <button type="submit" class="
                    px-8
                    py-2.5
                    bg-red-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
      hover:bg-red-700 hover:shadow-lg
      focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;