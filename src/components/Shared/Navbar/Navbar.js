import React, { useState } from 'react';
import { AiOutlineUser, AiFillSetting, AiOutlineAlignLeft, AiFillCaretUp } from "react-icons/ai";
import CustomLink from '../../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <header className='w-full'>
            <nav className='nav text-white flex justify-center'>
                <div className='flex justify-between items-center h-12 md:h-20 lg:h-28 w-full md:w-2/3 lg:w-3/4 px-5'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl'>Warehouse</h1>
                    <ul className='flex text-xl md:text-2xl w-20 justify-evenly'>
                        <li><AiOutlineUser /></li>
                        <li><AiFillSetting /> </li>
                    </ul>
                </div>
            </nav>
            <nav className='flex justify-start toggle-icon text-white'>
                <div onClick={() => setOpenNav(!openNav)} className='w-12 h-8 md:hidden text-2xl ml-5'>
                    {openNav ? <AiFillCaretUp /> : <AiOutlineAlignLeft />}
                </div>
            </nav>
            <nav className='nav nav-bottom text-white'>
                <ul className={`flex flex-col md:flex-row justify-center items-center py-2 w-full h-18 md:h-20 lg:h-14 absolute md:static ease-in duration-300 z-10 ${openNav ? 'top-20 nav' : 'top-[-200px]'}`}>
                    <li className='px-5 text-lg'><CustomLink to='/home'>Home</CustomLink></li>
                    <li className='px-5 text-lg'><CustomLink to='/inventory'>Inventory</CustomLink></li>
                    <li className='px-5 text-lg'><CustomLink to='/myItems'>My Items</CustomLink></li>
                    <li className='px-5 text-lg'><CustomLink to='/settings'>Settings</CustomLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;