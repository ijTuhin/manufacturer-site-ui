import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
const SideNav = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500  text-gray-700 py-2 md:py-5'>
            <div className='md:flex md:justify-between hidden'>
                <h1 className="md:text-3xl text-xl text-white ml-[1.5%]">Dashboard</h1>
            </div>
            <span className='nav block md:hidden'>
                <h1 className="md:text-3xl text-xl text-white ml-[8%]">Dashboard</h1>
                <ul className='sub-nav mt-4 absolute top-[8%] left-[20%] w-[28%] text-center mx-3 bg-white rounded rounded-tl-none'>
                    <li className='hover:text-white text-left py-0.5 hover:bg-sky-600 text-sky-600'><Link className='mx-7 px-2' to="/user-orders">My Order</Link></li>
                    <li className='hover:text-white text-left py-0.5 border-t-2 hover:bg-sky-600 text-sky-600'><Link className='mx-7 px-2' to="/add-review">Add Review</Link></li>
                    <li className='hover:text-white text-left py-0.5 border-t-2 hover:bg-sky-600 text-sky-600'><Link className='mx-7 px-2' to="/user-profile">My Profile</Link></li>
                    <li className='hover:text-white text-left py-0.5 border-t-2 hover:bg-sky-600 text-sky-600'><Link className='mx-7 px-2' to="/purchase">Purchase</Link></li>
                </ul>
            </span>
        </div>
    );
};

export default SideNav;