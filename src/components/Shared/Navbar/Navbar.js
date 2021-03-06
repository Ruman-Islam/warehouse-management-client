import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    AiOutlineUser,
    AiFillSetting,
    AiOutlineAlignLeft,
    AiFillCaretUp
} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.config';
import useNav from '../../../Hooks/UseNav';
import UseSignOut from '../../../Hooks/UseSignOut';
import CustomLink from '../../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const { navbar } = useNav();
    const [user, ,] = useAuthState(auth);
    const navigate = useNavigate();
    const { handleSignOut } = UseSignOut();

    return (
        <header id='header' className='w-full'>
            <nav className='background-color text-white flex justify-center'>
                <div className='flex justify-between items-center h-12 xl:h-20 2xl:h-28 w-full md:w-2/3 lg:w-3/4 px-5'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl'>Shelter</h1>
                    <ul className='flex text-xl md:text-2xl w-64 justify-evenly items-center'>
                        {user ? <li className='text-sm'>{user.displayName}</li> : <li><AiOutlineUser /></li>}
                        {user ? <li onClick={handleSignOut} className='text-lg cursor-pointer'>Logout</li>
                            :
                            <li onClick={() => navigate('/login')} className='text-lg cursor-pointer'>Login</li>
                        }
                        {user ? '' : <li onClick={() => navigate('/registration')} className='text-lg cursor-pointer'>Signup</li>}
                        <li className='cursor-pointer' onClick={() => navigate('/setting')}><AiFillSetting /> </li>
                    </ul>
                </div>
            </nav>
            <nav className={`flex justify-start items-center background-color text-white ${navbar && 'hidden'}`}>
                <div onClick={() => setOpenNav(!openNav)} className='w-12 h-8 md:hidden text-xl ml-5 flex items-center'>
                    {openNav ? <AiFillCaretUp /> : <AiOutlineAlignLeft />}
                </div>
            </nav>
            <nav
                id='navbar'
                className={`border border-l-0 border-r-0 border-b-0 border-t-1 text-white flex items-center ${navbar ? 'md:fixed md:w-full md:z-10 scrolly-background-color primary-color top-0 shadow-lg' : 'background-color'}`}>
                <ul className={`flex flex-col md:flex-row justify-center items-center py-2 w-full h-18 md:h-20 lg:h-12 absolute md:static ease-in duration-500 z-10 ${openNav ? 'top-20 nav' : 'top-[-200px]'}`}>
                    <li className='px-3 text-md font-semibold'>
                        <CustomLink to='/home'>Home</CustomLink>
                    </li>
                    <li className='px-3 text-md font-semibold'>
                        <CustomLink smooth to='/inventories/#header'>Inventories</CustomLink>
                    </li>
                    <li className='px-3 text-md font-semibold'>
                        <CustomLink to='/dashboard'>
                            Dashboard
                        </CustomLink>
                    </li>
                    <li className='px-3 text-md font-semibold'>
                        <CustomLink to='/blog'>Blog</CustomLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;