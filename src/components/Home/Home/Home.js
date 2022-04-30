import React from 'react';
import Inventory from '../../Inventory/Inventory';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <Inventory isHome />
            </div>
        </div>
    );
};

export default Home;