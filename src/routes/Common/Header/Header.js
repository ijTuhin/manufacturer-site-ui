import React from 'react';
import { logo } from '../../../index';
import './Header.css';
import { faCoffee, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className=' shadow-lg navbar navbar-expand-lg navbar-light'>
            <div className='flex items-center justify-between mx-8 py-4'>
                <div className='flex items-center justify-between'>
                    <img src={logo} className="w-56 pr-8" alt="" />
                    <p className='px-3 font-mono'>Username</p>
                    <p className='px-3 font-mono'>user@somemail.some</p>
                </div>
                <div className='flex'>
                    <p className='px-3 text-lg hover:bg-blue-200 py-0.5 rounded'>Home</p>
                    <p className='px-3 text-lg hover:bg-blue-200 py-0.5 rounded'>Blog</p>
                    <p className='px-3 text-lg hover:bg-blue-200 py-0.5 rounded'>Portfolio</p>
                    <p className='px-3 text-lg hover:bg-blue-200 py-0.5 rounded'>About us</p>
                </div>
            </div>
            <div className='mx-24 py-5'>
                <div className='flex items-center justify-center pr-8'>
                    <div className='flex'>
                        <p className='mx-7 px-2 bar'>My Orders</p>
                        <span className='border-r-2'></span>
                    </div>
                    <div className="flex">
                        <p className='mx-7 px-2 bar'>Add a Review</p>
                        <span className="border-r-2"></span>
                    </div>
                    <div className="flex">
                        <p className='mx-7 px-2 bar'>My Profile</p>
                        <span className="border-r-2"></span>
                    </div>
                    <div className="flex">
                        <p className='mx-7 px-2 bar'>Purchase</p>
                        <span className="border-r-2"></span>
                    </div>
                    <p className='px-9 hover:text-red-500 transition duration-150 ease-in-out' data-bs-toggle="tooltip" title="LogOut"><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></p>
                </div>
            </div>

        </div>
    );
};

export default Header;