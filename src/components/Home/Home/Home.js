import React from 'react';
import Inventory from '../../Inventory/Inventory';
import TopSellers from '../../TopSellers/TopSellers';
import TopSellingProducts from '../TopSellingProducts/TopSellingProducts';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <Inventory isHome />
            </div>
            <div>
                <TopSellers />
            </div>
            <div>
                <TopSellingProducts />
            </div>
            <div>
                <About />
            </div>
        </div>
    );
};

export default Home;