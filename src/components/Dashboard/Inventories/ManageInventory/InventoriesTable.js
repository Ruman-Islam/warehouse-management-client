import React from 'react';
import { AiFillCloseSquare, AiFillEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const InventoriesTable = ({ products, handleDelete, error }) => {
    const navigate = useNavigate();
    let count = 0;
    return (
        <div className='p-5 animation'>
            <div className='overflow-auto rounded-lg shadow'>
                <table className='w-full'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 w-2 text-sm font-semibold tracking-wide text-left '>NO.</th>
                            <th className='p-3 w-4/12 text-sm font-semibold tracking-wide text-left'>PRODUCT</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>QUANTITY</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                            <tr
                                key={product._id}
                                className={`${count % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-sky-50`}>
                                <td className='p-3 w-2 text-sm text-gray-700'>{++count}.</td>
                                <td
                                    className='p-3 text-sm text-gray-700 flex items-center whitespace-nowrap'>
                                    <span><img className='w-8 h-8 rounded-full border p-1 mr-1' src={product.img} alt="" /></span>
                                    <span>{product.productName}</span>
                                </td>
                                <td className='p-3 text-sm text-gray-700 text-center'>{product.quantity}</td>
                                <td className='flex justify-center'>
                                    <button
                                        onClick={() => navigate(`/inventoryDetail/${product._id}`)}
                                        className='flex items-center justify-between text-xl rounded-md mt-3 hover:text-sky-500 text-sky-700 mr-5'>
                                        <AiFillEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className='flex items-center justify-between text-xl rounded-md mt-3 hover:text-red-600 text-red-700'>
                                        <AiFillCloseSquare />
                                    </button>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
                {error && <h1 className='ml-3'>{error}</h1>}
            </div>
        </div>
    );
};

export default InventoriesTable;