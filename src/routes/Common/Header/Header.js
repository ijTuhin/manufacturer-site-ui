import { logo } from '../../../index';
import './Header.css';
import { faBars, faMessage, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const url = `https://dry-journey-38445.herokuapp.com/user/${user?.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProfile(data);
            });
    }, [])
    // console.log(user.email);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/login');
    };
    return (
        <div className='sticky z-50 top-0'>

            <div className='navbar navbar-expand-lg navbar-light md:block hidden'>
                <div className='bg-white flex items-center justify-between px-8 py-4'>
                    <img src={logo} className="w-56 pr-8" alt="" />
                    <div className='flex'>
                        {
                            user?.displayName ?
                                <>
                                    <p className="mx-2 text-lg hover:text-black rounded flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='inline w-5 h-5 mt-1 mr-1'><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z" /></svg> <span>{user.displayName}</span></p>
                                </>
                                :
                                <>
                                    <p className="mx-2 text-lg hover:text-black rounded flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='inline w-5 h-5 mt-1 mr-1'><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z" /></svg> <span>{profile?.displayName}</span></p>
                                </>
                        }
                        <Link to="/" className='px-1.5 mx-1.5 text-lg hover:text-black rounded bar'>Home</Link>
                        {
                            user ?
                                <>
                                    <Link to='/dashboard' className='px-1.5 mx-1.5 text-lg hover:text-black rounded bar'>Dashboard</Link>
                                </>
                                :
                                <></>
                        }
                        <Link to="/blogs" className='px-1.5 mx-1.5 text-lg hover:text-black rounded bar'>Blog</Link>
                        <Link to="/portfolio" className='px-1.5 mx-1.5 text-lg hover:text-black rounded bar'>Portfolio</Link>
                        <Link to="/about-us" className='px-1.5 mx-1.5 text-lg hover:text-black rounded bar'>About us</Link>
                        {
                            !user ?
                                <Link to="/login" className='px-1.5 mx-1.5 text-lg hover:text-black rounded bar'>Login</Link>
                                :
                                <>
                                    <button className='px-3 text-lg hover:text-red-500 py-0.5 rounded' onClick={() => {
                                        signOut(auth);
                                        Navigate('/login');
                                        localStorage.removeItem('accessToken')
                                    }} data-bs-toggle="tooltip" title="LogOut"><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></button>
                                </>
                        }

                    </div>
                </div>
            </div>


            <div className='shadow-lg navbar navbar-expand-lg navbar-light bg-white md:hidden flex items-center justify-between p-6'>
                <div class="flex justify-center">
                    <div>
                        <div class="dropdown relative">
                            <Link to="/#" className='hover:text-sky-700 transition duration-150 ease-in-out text-lg'
                                type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            </Link>
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
                                    <Link to="/"
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >Home</Link>
                                </li>
                                {
                                    user ?
                                        <>
                                            <li>
                                                <Link to="/dashboard"
                                                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                                >Dashboard</Link>
                                            </li>
                                        </>
                                        :
                                        <></>
                                }
                                <li>
                                    <Link to="/blogs"
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >Blog</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio"
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/about-us"
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >About us</Link>
                                </li>

                                {
                                    !user ?
                                        <>
                                            <li>
                                                <Link to="/login"
                                                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent border-t-2 border-gray-100 text-gray-700 hover:bg-gray-100"
                                                >Login</Link>
                                            </li>
                                        </>
                                        :
                                        <></>
                                }
                            </ul>
                        </div>
                    </div>
                </div>




                <img src={logo} className="w-40" alt="" />
                {
                    user ?
                        <>
                            <button to="/#" className='hover:text-red-500 transition duration-150 ease-in-out text-lg' onClick={logout} data-bs-toggle="tooltip" title="LogOut"><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></button>
                        </>
                        :
                        <></>
                }
            </div>

        </div>
    );
};

export default Header;