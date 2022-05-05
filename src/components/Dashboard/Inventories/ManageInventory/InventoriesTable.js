import React from 'react';
import { AiFillDelete } from "react-icons/ai";

const InventoriesTable = ({ products, handleDelete }) => {
    let count = 0;
    return (
        <table className='table-fixed w-11/12 mx-auto animation'>
            <thead className=''>
                <tr className='h-16 text-xs md:text-lg'>
                    <th className='w-20 text-left'>No.</th>
                    <th className='text-left'>PRODUCT NAME</th>
                    <th className='hidden md:block md:mt-5'>ID</th>
                    <th className=''>QUANTITY</th>
                    <th className=''>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>
                    <tr key={product._id}
                        className='h-16 primary-color text-center border border-l-0 border-r-0 border-t-0 rounded-md'>
                        <td className='text-left'>{++count}.</td>
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
    );
};

export default InventoriesTable;