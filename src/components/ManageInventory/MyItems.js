import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
                setIsLoading(false);
                if (err.response.status === 401 || err.response.status === 403) {
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
            <PageTitle title="My Items" />
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
                            {products?.map(product =>
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

export default MyItems;