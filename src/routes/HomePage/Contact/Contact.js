import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className='bg-transparent grid grid-cols-6 w-screen'>
            <div className='py-10 md:mr-28 col-span-3 bg-black/40 banner-heading'>
                <div className='banner-heading-inner'>
                    <h2 className='text-4xl font-serif text-white md:relative md:left-20 md:top-10 contact-txt'>Contact us</h2>
                    <h2 className='text-4xl font-serif text-white md:relative md:left-20 md:top-10 md:border-t-2 contact-box'>Contact us</h2>
                </div>

            </div>
            <div className='py-10 col-span-3 md:mx-28'>
                <form className='w-full'>
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