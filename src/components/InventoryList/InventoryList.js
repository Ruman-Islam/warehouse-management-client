import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from '../Shared/Spinner/Spinner';

const InventoryList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [changeState, setChangeState] = useState(false);
    useEffect(() => {
        const url = "http://localhost:5000/products";
        setIsLoading(true);
        (async () => {
            try {
                const { data } = await axios.get(url)
                setProducts(data.products);
                setIsLoading(false);
            } catch (err) {
                if (err.response.status === 404) {
                    console.log(err.response.status);
                    setChangeState(!changeState);
                    setIsLoading(false);
                }
            }
        })()
    }, [changeState])
    return (
        <div className="py-5">
            <>
                {isLoading ? <Spinner />
                    :
                    <table className='table-fixed w-11/12 mx-auto'>
                        <thead>
                            <tr>
                                <th>PRODUCT NAME</th>
                                <th>ID</th>
                                <th>QUANTITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product =>
                                <tr key={product._id} className='background-color text-white text-center border rounded-md'>
                                    <td>{product.productName}</td>
                                    <td>{product._id}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button
                                            className='px-10 py-0 rounded-md my-2 bg-red-700 hover:bg-red-600'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                }
            </>
        </div>
    );
};

export default InventoryList;