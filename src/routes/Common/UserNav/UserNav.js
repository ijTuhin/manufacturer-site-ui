import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
    return (
        <div className='sticky z-50 top-0 bg-sky-400/80 text-gray-700 py-5'>
            <div className='flex items-center justify-center pr-8'>
                <div className='flex'>
                    <Link to="/#" className='mx-7 px-2 bar'>My Orders</Link>
                    <span className="border-r-2"></span>
                </div>
                <div className="flex">
                    <Link to="/#" className='mx-7 px-2 bar'>Add a Review</Link>
                    <span className="border-r-2"></span>
                </div>
                <div className="flex">
                    <Link to="/#" className='mx-7 px-2 bar'>My Profile</Link>
                    <span className="border-r-2"></span>
                </div>
                <div className="flex">
                    <Link to="/#" className='mx-7 px-2 bar'>Purchase</Link>
                    <span className="border-r-2"></span>
                </div>
                <Link to="/#" className='px-9 hover:text-red-500 transition duration-150 ease-in-out' data-bs-toggle="tooltip" title="LogOut"><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></Link>
            </div>
        </div>
    );
};

export default UserNav;