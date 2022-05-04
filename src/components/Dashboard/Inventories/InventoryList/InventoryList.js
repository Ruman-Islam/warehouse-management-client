import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Spinner from '../../../Shared/Spinner/Spinner';
import Pagination from '../../../Shared/Pagination/Pagination';
import UseProductDelete from '../../../../Hooks/UseProductDelete';
import './InventoryList.css';

const InventoryList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [changeState, setChangeState] = useState(false);
    const [limit, setLimit] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [totalProductCount, setTotalProductCount] = useState(0);
    const { handleDelete } = UseProductDelete(
        products,
        setProducts,
        changeState,
        setChangeState);

    useEffect(() => {
        const url = `http://localhost:5000/products?limit=${limit}&pageNumber=${pageNumber}}`;
        setIsLoading(true);
        (async () => {
            try {
                const { data } = await axios.get(url)
                setProducts(data.products);
                setTotalPage(Math.ceil(data.count / limit));
                setTotalProductCount(data.count);
                setIsLoading(false);
            } catch (err) {
                if (err.response.status === 404) {
                    console.log(err.response.status);
                    setChangeState(!changeState);
                    setIsLoading(false);
                }
            }
        })()
    }, [changeState, limit, pageNumber])


    return (
        <div className="py-5">
            <h1 className='ml-5 mb-5 text-sm'>Total {totalProductCount} results</h1>
            <>
                {isLoading ? <Spinner />
                    :
                    <table className='table-fixed w-11/12 mx-auto'>
                        <thead className='border'>
                            <tr className='h-16 text-xs md:text-lg'>
                                <th>PRODUCT NAME</th>
                                <th className='hidden md:block md:mt-5'>ID</th>
                                <th>QUANTITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product =>
                                <tr key={product._id}
                                    className='h-16 primary-color text-center border border-l-0 border-r-0 border-t-0 rounded-md'>
                                    <td className='text-left'>{product.productName}</td>
                                    <td className='hidden md:block md:mt-5'>{product._id}</td>
                                    <td>{product.quantity}</td>
                                    <td className='flex justify-center'>
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className='flex items-center justify-between text-4xl rounded-md mt-3 hover:text-red-600 text-red-700'>
                                            <AiFillDelete />
                                        </button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                }
            </>
            <Pagination
                isInventoryList
                limit={limit}
                isLoading={isLoading}
                totalPage={totalPage}
                pageNumber={pageNumber}
                totalProductCount={totalProductCount}
                setPageNumber={setPageNumber}
                setLimit={setLimit}
            />
        </div>
    );
};

export default InventoryList;