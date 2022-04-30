import axios from 'axios';
import Rating from 'react-rating';
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';

const InventoryDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleQuantity = (id) => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
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
                    <div className='grid grid-cols-2 w-2/3 mx-auto mt-16'>
                        <div className='border border-slate-200 rounded'>
                            <img className='w-full' src={product.img} alt="" />
                        </div>
                        <div className='px-6'>
                            <h1 className='text-2xl font-semibold'>{product.productName}</h1>
                            <Rating
                                className='text-xs text-amber-400 my-5'
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
                            <p className='text-4xl font-extrabold my-5 primary-color'>{'$'}{product.price}</p>
                            <p className='font-semibold'><span>SUPPLIER - </span>{product.supplier}</p>
                            <p className='text-slate-500'>{product.description}</p>
                            <div className='flex justify-between items-center my-2 md:my-5'>
                                <span className='flex text-xl md:text-2xl'>
                                    <p className='mr-2'>Quantity :</p>
                                    <p>{quantity}</p>
                                </span>
                                <button
                                    onClick={() => handleQuantity(product._id)}
                                    className='text-white font-semibold px-20 py-2 rounded text-2xl background-color'>
                                    Deliver
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default InventoryDetail;