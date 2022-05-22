import React from 'react';
import { facebook, google1, youtube } from '../../../index';

const Footer = () => {
    return (
        <div className='py-10 bg-white border-t-2 md:grid md:grid-cols-5 flex flex-col-reverse'>
            <div className='flex justify-center md:items-start items-center md:ml-10 md:col-span-1 py-5'>
                <h2 className='font-medium'>Follow us on: </h2>
                <div className='flex mx-2'>
                    <img className='w-7 h-7 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={facebook} alt="" />
                    <img className='bg-white p-1 w-8 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={google1} alt="" />

                    <img className='bg-white p-1 w-8 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={youtube} alt="" />
                </div>
            </div>
            <div className='md:flex md:justify-center md:items-start md:mx-56 md:col-span-4'>
                <div className='md:mx-6 md:mb-0 mb-6 mx-12'>
                    <h1 className='text-2xl text-sky-600 font-medium'>Chittagong Offiice/Factory</h1>
                    <p className='text-xl'>Employees</p>
                    <small>Khowaj Nagar, P.O.: Ajimpara, <br />
                        P.S.: Karnafuly <br />
                        Chattagram, Bangladesh. <br />
                        Tel : + 88 031 617934, +88 031 2864526, <br />
                        Fax : +88 031 610911 <br />
                        E-mail: inquiry@goldensonbd.com <br />
                        Telephone: +88 02 55052098 – 99, <br />
                        (EXT: 203), Fax: +88 02 55052100, <br />
                        Email : noor@goldensonbd.com
                        www.goldensonbd.com</small>
                </div>
                <div className='md:mx-6 md:mb-0 mb-6 mx-12'>
                    <h1 className='text-2xl text-sky-600 font-medium'>Share Office/Dhaka Office</h1>
                    <p className='text-xl'>Factory Space</p>
                    <small>Road # 90, House # 10/B, 1st Floor <br />
                        Gulshan-2, Dhaka-1212, Bangladesh. <br />
                        Tel : +88 02 55052098 - 99 <br />
                        Fax : +88 02 55052100 <br />
                        E-mail: inquiry@goldensonbd.com <br />
                        www.goldensonbd.com <br />
                        Investor’s Relation Department. <br />
                        Name: Mr. Noor Mohammad, <br />
                        Designation: Senior Officer (Share), <br />
                        Telephone: +88 02 55052098 – 99, <br />
                        (EXT: 203), Fax: +88 02 55052100, <br />
                        Email : noor@goldensonbd.com</small>
                </div>
                <div className='md:mx-6 md:mb-0 mb-6 mx-12'>
                    <h1 className='text-2xl text-sky-600 font-medium'>Registered Office</h1>
                    <p className='text-xl'>Retail Space</p>
                    <small>Khowaj Nagar, P.O.: Ajimpara <br />
                        P.S.: Karnafuly <br />
                        Chattagram, Bangladesh. <br />
                        Tel : + 88 031 617934, +88 031 2864526, <br />
                        Telephone: +88 02 55052098 – 99, <br />
                        (EXT: 203), Fax: +88 02 55052100, <br />
                        Email : noor@goldensonbd.com
                        Fax : +88 031 610911 <br />
                        E-mail: inquiry@goldensonbd.com <br />
                        www.goldensonbd.com</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;