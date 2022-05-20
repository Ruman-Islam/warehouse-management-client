import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from '../Dashboard/Sidebar/Sidebar';
// import Footer from '../Shared/Footer/Footer';
// import Navbar from '../Shared/Navbar/Navbar';
import PageTitle from '../Shared/PageTitle/PageTitle';
import {
    AiOutlineUser,
    AiFillEdit,
    AiOutlineHome
} from "react-icons/ai";

const UserSetting = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <PageTitle title="Settings" />
            {/* <Navbar /> */}
            <div className='flex justify-between flex-col xl:flex-row'>
                <nav className='bg-sky-800 xl:hidden flex'>
                    <div
                        onClick={() => navigate('/home')}
                        className='inner-container primary-color cursor-pointe'>
                        <div className='icon text-white'><AiOutlineHome /></div>
                        <div className='button'>
                            <button className="font-bold text-white"
                            >HOME
                            </button>
                        </div>
                    </div>
                    <div
                        onClick={() => navigate('/setting/user-profile')}
                        className='inner-container cursor-pointer'>
                        <div className='icon'><AiOutlineUser /></div>
                        <div className='button'>
                            <button
                                className={
                                    location.pathname === '/setting/user-profile'
                                    && 'active-link'}
                            >Profile
                            </button>
                        </div>
                    </div>
                    <div
                        onClick={() => navigate('/setting/update-profile')}
                        className='inner-container cursor-pointer'>
                        <div className='icon'><AiFillEdit /></div>
                        <div className='button'>
                            <button
                                className={
                                    location.pathname === '/setting/update-profile'
                                    && 'active-link'}
                            >Edit
                            </button>
                        </div>
                    </div>
                </nav>

                <aside className='hidden w-80 py-8 text-center xl:flex flex-col min-h-screen text-white sidebar-full-screen'>
                    <div
                        onClick={() => navigate('/home')}
                        className='inner-container primary-color home-button cursor-pointer'>
                        <div className='icon'><AiOutlineHome /></div>
                        <div className='button'>
                            <button className="font-bold"
                            >HOME
                            </button>
                        </div>
                    </div>
                    <div
                        onClick={() => navigate('/setting/user-profile')}
                        className='inner-container cursor-pointer'>
                        <div className='icon'><AiOutlineUser /></div>
                        <div className='button'>
                            <button
                                className={
                                    (location.pathname === '/setting/user-profile'
                                        || location.pathname === '/setting')
                                    && 'active-link'}
                            >Profile
                            </button>
                        </div>
                    </div>
                    <div
                        onClick={() => navigate('/setting/update-profile')}
                        className='inner-container cursor-pointer'>
                        <div className='icon'><AiFillEdit /></div>
                        <div className='button'>
                            <button
                                className={
                                    location.pathname === '/setting/update-profile'
                                    && 'active-link'}
                            >Edit Profile
                            </button>
                        </div>
                    </div>
                </aside>
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default UserSetting;