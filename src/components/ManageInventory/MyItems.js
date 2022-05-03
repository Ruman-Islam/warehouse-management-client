import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiFillDelete } from "react-icons/ai";
import swal from 'sweetalert';
import auth from '../../Firebase/Firebase.config';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Spinner from '../Shared/Spinner/Spinner';

const MyItems = () => {
    const [user, ,] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const notify = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    useEffect(() => {
        setIsLoading(true);
        const email = user?.email;
        const url = `http://localhost:5000/products-user?email=${email}`;
        (async () => {
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `accessKey ${localStorage.getItem('accessToken')}`
                    }
                })
                setProducts(data.products);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                if (err.response.status === 403 || err.response.status === 401) {
                    setIsLoading(false);
                    signOut(auth);
                    navigate('/login');
                }
            }
        })()
    }, [user?.email, navigate])

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
            <h1 className='ml-5 text-xl'>{products.length}</h1>
            <PageTitle title="My Items" />
            <>
                {isLoading ? <Spinner />
                    :
                    <table className='table-fixed w-11/12 mx-auto'>
                        <thead>
                            <tr className='h-16 text-xs md:text-lg'>
                                <th>PRODUCT NAME</th>
                                <th className='hidden md:block md:mt-5'>ID</th>
                                <th>QUANTITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map(product =>
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
        </div>
    );
};

export default MyItems;