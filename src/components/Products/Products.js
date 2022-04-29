import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Spinner from '../Shared/Spinner/Spinner';

const Products = ({ isHome }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const url = "http://localhost:5000/products";
                const { data } = await axios.get(url)
                setProducts(data.products);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        })()
    }, [])

    return (
        <>
            {isLoading ? <Spinner />
                :
                <div className='w-2/3 grid grid-cols-3 gap-y-12 mx-auto'>
                    {isHome ?
                        products.slice(0, 6).map(product => <Product key={product._id} product={product} />)
                        :
                        products.map(product => <Product key={product._id} product={product} />)
                    }
                </div>
            }
        </>
    );
};

export default Products;