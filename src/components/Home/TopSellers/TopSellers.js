import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import TopSeller from './TopSeller';

const TopSellers = () => {
    const [topSellers, setTopSellers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [changeState, setChangeState] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const url = "http://localhost:5000/top-sellers";
        (async () => {
            try {
                const { data } = await axios.get(url)
                setTopSellers(data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setChangeState(!changeState);
                setIsLoading(false);
            }
        })()
    }, [changeState])
    return (
        <>
            {isLoading ? <Spinner />
                :
                <div className='w-full my-20 text-sm'>
                    <h1 className='text-4xl text-center'>Sellers Of The Month</h1>
                    <p className='text-center my-5 leading-7'>Buy it, love it, show it off! Tag your pics with #TheWarehouseNZ and we might feature them on Instagram.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-auto w-full gap-x-1'>
                        {topSellers.map(seller => <TopSeller key={seller._id} seller={seller} />)}
                    </div>
                </div>}
        </>
    );
};

export default TopSellers;