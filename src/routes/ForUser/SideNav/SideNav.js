import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
const SideNav = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500  text-gray-700 py-2 md:py-5'>
            <div className='flex justify-between'>
                <h1 className="md:text-3xl text-xl text-white ml-[1.5%]">Dashboard</h1>
            </div>
            
        </div>
    );
};

export default SideNav;