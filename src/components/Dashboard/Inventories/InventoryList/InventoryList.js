import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Spinner from '../../../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const InventoryList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [changeState, setChangeState] = useState(false);
    const [limit, setLimit] = useState(6);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const notify = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }


    useEffect(() => {
        const url = `http://localhost:5000/products?limit=${limit}&pageNumber=${pageNumber}}`;
        setIsLoading(true);
        (async () => {
            try {
                const { data } = await axios.get(url)
                setProducts(data.products);
                setTotalPage(Math.ceil(data.count / limit));
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

    const handleDelete = async productId => {
        const url = `http://localhost:5000/delete-product/${productId}`
        try {
            swal({
                title: "Are your sure?",
                text: "Deleting can't be undone",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                safeMode: false
            })
                .then(async (isOkay) => {
                    if (isOkay) {
                        const { data } = await axios.delete(url)
                        if (data.success) {
                            const remainingProducts = products.filter(product => product._id !== productId);
                            setProducts(remainingProducts);
                            notify('Successfully deleted')
                        }
                    }
                });
        } catch (err) {
            console.log(err);
        }
    }

    const prevPage = () => {
        if (pageNumber > 0) {
            const pageNo = pageNumber - 1;
            setPageNumber(pageNo);
        }
    }
    const nextPage = () => {
        if (totalPage > pageNumber + 1) {
            const pageNo = pageNumber + 1;
            setPageNumber(pageNo);
        }
    }

    return (
        <div className="py-5">
            <h1 className='ml-5 text-xl'>{products.length}</h1>
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
            <div className='flex justify-center my-20 mx-auto'>
                <>
                    <button className='mr-10' onClick={prevPage}>Prev</button>
                    { // here making an array for picking sequel of 1, 2, 3
                        // for maintaining page number dynamically
                        [...Array(totalPage).keys()]
                            .map(pgNumber =>
                                <button key={pgNumber}
                                    className={`border p-2 ${pageNumber === pgNumber ? 'bg-blue-900 text-white' : ''}`}
                                    onClick={() => setPageNumber(pgNumber)}>
                                    {pgNumber + 1}
                                </button>
                            )
                    }
                    <button className='ml-10' onClick={nextPage}>Next</button>
                </>
                <div className='selected-page-btn ml-10 borde'>
                    <select defaultValue={limit}
                        onChange={(e) => setLimit(e.target.value)}>
                        <option value="4">4</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default InventoryList;