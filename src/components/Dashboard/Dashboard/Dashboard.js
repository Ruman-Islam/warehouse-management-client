import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import ManageInventory from '../../ManageInventory/ManageInventory';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <div className='flex flex-col md:flex-row'>
            <PageTitle title="Manage Inventory" />
            <Sidebar openNav={openNav} setOpenNav={setOpenNav} />
            <div className={`w-full ${openNav ? 'mt-44' : 'mt-0 '} duration-300`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;