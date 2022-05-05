import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ManageInventory.css';

const ManageInventory = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <div className='flex flex-col md:flex-row'>
            <PageTitle title="Manage Inventory" />
            <Sidebar openNav={openNav} setOpenNav={setOpenNav} />
            <div className={`w-full ${openNav ? 'mt-36' : 'mt-0 '} duration-300`}>
                <Outlet />
            </div>
        </div>
    );
};

export default ManageInventory;