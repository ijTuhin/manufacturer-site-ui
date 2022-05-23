import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
const SideNav = () => {
    return (
        <div className=' bg-sky-500 text-gray-700 py-2 md:py-5'>
            <h1 className="md:text-3xl text-xl text-white ml-[8%] hidden md:block">Dashboard</h1>
            <span className='nav block md:hidden'>
                <h1 className="md:text-3xl text-xl text-white ml-[8%]">Dashboard</h1>
                <ul className='sub-nav mt-4 absolute top-[8%] left-[20%] w-[28%] text-center mx-3 bg-white rounded rounded-tl-none'>
                    <li className='hover:text-white text-left py-0.5 hover:bg-sky-600 text-sky-600'><Link  className='mx-7 px-2' to="/user-orders">My Order</Link></li>
                    <li className='hover:text-white text-left py-0.5 border-t-2 hover:bg-sky-600 text-sky-600'><Link  className='mx-7 px-2' to="/add-review">Add Review</Link></li>
                    <li className='hover:text-white text-left py-0.5 border-t-2 hover:bg-sky-600 text-sky-600'><Link  className='mx-7 px-2' to="/user-profile">My Profile</Link></li>
                    <li className='hover:text-white text-left py-0.5 border-t-2 hover:bg-sky-600 text-sky-600'><Link  className='mx-7 px-2' to="/purchase">Purchase</Link></li>
                </ul>
            </span>
            <div className='flex items-center justify-center pr-8'>
                {/* <div className='flex'>
                    <Link to="/user-orders" className='mx-7 px-2 bar'>My Orders</Link>
                    <span className="border-r-2"></span>
                </div>
                <div className="flex">
                    <Link to="/add-review" className='mx-7 px-2 bar'>Add a Review</Link>
                    <span className="border-r-2"></span>
                </div>
                <div className="flex">
                    <Link to="/user-profile" className='mx-7 px-2 bar'>My Profile</Link>
                    <span className="border-r-2"></span>
                </div>
                <div className="flex">
                    <Link to="/purchase" className='mx-7 px-2 bar'>Purchase</Link>
                    <span className="border-r-2"></span>
                </div> */}
                {/* <button className='px-9 hover:text-red-500 transition duration-150 ease-in-out' data-bs-toggle="tooltip" title="LogOut"><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></button> */}
            </div>
        </div>
    );
};

export default SideNav;