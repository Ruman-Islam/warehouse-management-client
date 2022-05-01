import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TopSellingProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/top-selling-products";
        (async () => {
            try {
                const { data } = await axios.get(url)
                console.log(data);
                setProducts(data);
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])
    return (
        <div className='w-2/3 my-20 mx-auto'>
            <h1 className='text-4xl text-center'>Top Selling Inventories</h1>
            <p className='text-center text-sm my-5 leading-3'>Changes every month keeps tracking.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-full gap-y-2'>
                {products?.map(product =>
                    <div className='shadow-lg'
                        key={product._id}>
                        <img className='w-full h-full' src={product.img} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopSellingProducts;