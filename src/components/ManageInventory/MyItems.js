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
import Pagination from '../Shared/Pagination/Pagination';

const MyItems = () => {
    const [user, ,] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [changeState, setChangeState] = useState(false);
    const [userTotalProducts, setUserTotalProducts] = useState(0);
    const [limit, setLimit] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const navigate = useNavigate();

    const notify = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    useEffect(() => {
        setIsLoading(true);
        const email = user?.email;
        const url = `https://protected-waters-02155.herokuapp.com/products-user?email=${email}&limit=${limit}&pageNumber=${pageNumber}`;
        (async () => {
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `accessKey ${localStorage.getItem('accessToken')}`
                    }
                })
                setProducts(data.products);
                setUserTotalProducts(data.count);
                setTotalPage(Math.ceil(data.count / limit));
                setIsLoading(false);
            } catch (err) {
                setChangeState(!changeState);
                if (err.response.status === 403 || err.response.status === 401) {
                    setIsLoading(false);
                    signOut(auth);
                    navigate('/login');
                }
            }
        })()
    }, [user?.email, navigate, limit, pageNumber, changeState])

    const handleDelete = async productId => {
        const url = `https://protected-waters-02155.herokuapp.com/delete-product/${productId}`
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
            <h1 className='ml-5 mb-5 text-sm'>Total {userTotalProducts} results</h1>
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
                totalPage={totalPage}
                isLoading={isLoading}
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
                userTotalProducts={userTotalProducts}
                setLimit={setLimit}
                limit={limit} />
        </div>
    );
};

export default MyItems;