import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, img, productName, price, quantity, review, supplier } = product;
    const navigate = useNavigate();

    return (
        <div className='rounded-b-lg overflow-hidden group shadow-lg max-w-sm upper-part'>
            <img className='img-tag' src={img} alt="" />
            <div
                className='bg-white w-full rounded-b-lg text-black bottom-part flex justify-center items-center flex-col'>
                <p className='text-center font-semibold text-sm hover:text-sky-500'>{productName}</p>
                <p className='text-center font-bold'>{'$'}{price}</p>
                <p className='text-center'>
                    <p className='text-sm'><span className='text-sky-500'>In stock:</span> {quantity}</p>
                    <p className='text-sm'>{supplier}</p>
                    <Rating
                        className='text-xs text-amber-400'
                        initialRating={review}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon icon={faStar} />}
                        readonly>
                    </Rating>
                </p>
                <button
                    onClick={() => navigate(`/inventoryDetail/${_id}`)}
                    className='rounded px-5 md:px-10 py-1 mt-2 text-white text-sm font-bold background-color hover:bg-sky-500 duration-300'>
                    Manage
                </button>
            </div>
        </div>
    );
};

export default Product;