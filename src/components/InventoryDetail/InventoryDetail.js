import axios from 'axios';
import Rating from 'react-rating';
import React, { useEffect, useState } from 'react';
import { AiFillCheckSquare, AiFillCloseSquare, AiOutlineDoubleRight } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner/Spinner';

const InventoryDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const notify = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const handleQuantity = (e, id, isUpdate) => {
        e.preventDefault();
        let newQuantity;
        const inputQuantity = +(e.target?.quantity?.value);
        if (inputQuantity < 0) {
            notify("Input positive value!");
            return;
        }
        if (quantity > 0 || inputQuantity) {
            newQuantity = isUpdate ? inputQuantity : quantity - 1;
            const url = `http://localhost:5000/product/${id}`;
            (async () => {
                try {
                    const { data } = await axios.put(url, { newQuantity })
                    if (data.success) setQuantity(newQuantity);
                } catch (err) {
                    console.log(err);
                }
            })()
        }
        isUpdate && e.target.reset();
    }

    useEffect(() => {
        setIsLoading(true);
        const url = `http://localhost:5000/product/${productId}`;
        (async () => {
            try {
                const { data } = await axios.get(url)
                setProduct(data.product);
                setQuantity(data.product.quantity);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        })()
    }, [productId])

    return (
        <>
            {isLoading ? <Spinner />
                :
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-2/3 mx-auto my-20'>
                        <div className='border border-slate-200 rounded'>
                            <img className='w-full' src={product.img} alt="" />
                        </div>
                        <div className='px-6'>
                            <h1 className='text-2xl font-semibold text-center md:text-left'>{product.productName}</h1>
                            <Rating
                                className='text-xs text-amber-400 my-5 ml-20 md:ml-0'
                                initialRating={product.review}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon icon={faStar} />}
                                readonly>
                            </Rating>
                            <p className='flex text-xs'><span className='mr-5'>AVAILABILITY :</span>
                                <span className='flex items-center text-green-500'>
                                    <span className='mr-2'>IN STOCK</span>{product.availability === 'yes' ?
                                        <AiFillCheckSquare />
                                        :
                                        <AiFillCloseSquare />}
                                </span>
                            </p>
                            <p className='flex text-xs my-2'><span className='mr-16'>TAGS :</span> {product.tags?.map((tag, index) =>
                                <span className='mr-1' key={index}>{tag},</span>
                            )}
                            </p>
                            <p className='flex text-xs'><span className='mr-20'>ID :</span> <span>{product._id}</span></p>
                            <p className='text-4xl font-extrabold my-5 primary-color text-center md:text-left'>{'$'}{product.price}</p>
                            <div className='flex flex-col'>
                                <div className='order-2 md:order-1 text-center md:text-left'>
                                    <p className='font-semibold'><span>SUPPLIER - </span>{product.supplier}</p>
                                    <p className='text-slate-500'>{product.description}</p>
                                </div>
                                <div
                                    className='flex flex-col md:flex-row justify-between items-center my-2 md:my-5 order-1 md:order-2 mb-10 md:mb-0'>
                                    <span className='flex text-xl md:text-2xl'>
                                        <p className='mr-2 text-2xl md:text-3xl'>Quantity :</p>
                                        <p className='text-2xl md:text-3xl'>{quantity}</p>
                                    </span>
                                    <button
                                        onClick={(e) => handleQuantity(e, product._id, false)}
                                        className='text-white mt-5 md:mt-0 px-10 md:px-16 py-1 rounded text-md md:text-2xl background-color hover:bg-blue-900 duration-300'>
                                        Deliver
                                    </button>
                                </div>
                            </div>
                            <form onSubmit={(e) => handleQuantity(e, product._id, true)}
                                className='my-0 md:my-5 p-5'>
                                <input type="number" placeholder='Number' name='quantity' className='border outline-0 p-2 rounded-md mt-5 w-full' />
                                <input type="submit" value="Re-Stock" className='bg-slate-500 hover:bg-slate-600 duration-300 text-white px-5 py-1 mt-2 rounded-md cursor-pointer' />
                                <small className='block text-slate-500 mt-4'>You can re-stock your product here. Put the quantity you want then hit the Re-Stock button. Remember you won't be able to put negative value or text.</small>
                            </form>
                            <div className='w-full md:w-2/4 ml-auto text-center md:text-right'>
                                <button
                                    className='text-blue-800 text-sm'>
                                    <div className='flex justify-end items-center'> <AiOutlineDoubleRight /><span>Manage Inventories</span></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default InventoryDetail;