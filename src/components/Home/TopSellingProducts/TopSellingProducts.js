import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TopSellingProducts = () => {
    const [products, setProducts] = useState([]);
    const [changeState, setChangeState] = useState(false);

    useEffect(() => {
        const url = "http://localhost:5000/top-selling-products";
        (async () => {
            try {
                const { data } = await axios.get(url)
                setProducts(data);
            } catch (err) {
                setChangeState(!changeState);
                console.log(err);
            }
        })()
    }, [changeState])
    return (
        <div className='w-2/3 my-20 mx-auto'>
            <h1 className='text-4xl text-center'>Top Selling Inventories</h1>
            <p className='text-center text-sm my-5 leading-3'>Changes every month keeps tracking.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-full gap-y-2 gap-x-2'>
                {products?.map(product =>
                    <div className='shadow-lg hover:-translate-y-2 duration-300'
                        key={product._id}>
                        <img className='w-full h-full' src={product.img} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopSellingProducts;