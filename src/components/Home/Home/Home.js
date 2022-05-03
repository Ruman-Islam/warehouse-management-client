import React from 'react';
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Inventories from '../../Dashboard/Inventories/Inventories/Inventories';
import Banner from '../Banner/Banner';
import About from '../About/About';
import TopSellers from '../TopSellers/TopSellers';
import TopSellingProducts from '../TopSellingProducts/TopSellingProducts';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div><Navbar /></div>
            <div><Banner /></div><hr />
            <div><Inventories isHome />
                <PageTitle title="Home" />
                <div className='w-full md:w-2/3 mx-auto text-center md:text-right'>
                    <button
                        onClick={() => navigate('/dashboard/inventory-list')}
                        className='text-blue-800 text-sm'>
                        <div className='flex justify-end items-center'><AiOutlineDoubleRight /><span>Manage Inventories</span></div>
                    </button>
                </div></div>
            <div><TopSellers /></div>
            <div><TopSellingProducts /></div>
            <div><About /></div>
            <div><Footer /></div>
        </div>
    );
};

export default Home;