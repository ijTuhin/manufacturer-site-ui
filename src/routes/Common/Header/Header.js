import React from 'react';
import { logo } from '../../../index';
import './Header.css';
import { faBars, faMessage, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div>
            <div className=' shadow-lg navbar navbar-expand-lg navbar-light md:block hidden'>
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
            <div className='md:hidden flex items-center justify-between mx-6 py-6'>
                <div class="flex justify-center">
                    <div>
                        <div class="dropdown relative">
                            <button className='hover:text-red-500 transition duration-150 ease-in-out text-lg' data-bs-toggle="tooltip" title="LogOut" type="button"
                                id="dropdownMenuButton2df"
                                data-bs-toggle="dropdown"
                                aria-expanded="false" ><FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            </button>
                            <ul
                                class="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                                aria-labelledby="dropdownMenuButton1ds">
                                <p
                                    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
                                >
                                    <span><FontAwesomeIcon className='text-slate-500' icon={faUser}></FontAwesomeIcon> UserName</span> <br />
                                    <span><FontAwesomeIcon className='text-slate-500' icon={faMessage}></FontAwesomeIcon> user@somemail.some</span>
                                </p>
                                <li className='border-t-2 border-gray-100'>
                                    <p
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >Home</p>
                                </li>
                                <li>
                                    <p
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >Blog</p>
                                </li>
                                <li>
                                    <p
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >Portfolio</p>
                                </li>
                                <li className='border-b-2 border-gray-100'>
                                    <p
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >About us</p>
                                </li>
                                <li>
                                    <p
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >My Orders</p>
                                </li>
                                <li>
                                    <p
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >Purchase</p>
                                </li>
                                <li>
                                    <p
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >Add a Review</p>
                                </li>
                                <li>
                                    <p
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >My Profile</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




                <img src={logo} className="w-40" alt="" />
                <p className='hover:text-red-500 transition duration-150 ease-in-out text-lg' data-bs-toggle="tooltip" title="LogOut"><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></p>
            </div>

        </div>
    );
};

export default Header;