import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from '../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const InventoryList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [changeState, setChangeState] = useState(false);

    const notify = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }


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

    return (
        <div className="py-5">
            <>
                {isLoading ? <Spinner />
                    :
                    <table className='table-fixed w-11/12 mx-auto'>
                        <thead>
                            <tr className='h-16'>
                                <th>PRODUCT NAME</th>
                                <th>ID</th>
                                <th>QUANTITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product =>
                                <tr key={product._id}
                                    className='h-16 primary-color text-center border border-l-0 border-r-0 border-t-0 rounded-md'>
                                    <td>{product.productName}</td>
                                    <td>{product._id}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className='px-10 py-0 rounded-md my-2 bg-red-700 hover:bg-red-600 text-white'>
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