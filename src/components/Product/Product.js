import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Product.css';

const Product = ({ product }) => {
    console.log(product);
    return (
        <div className='py-10'>
            <div className='rounded-b-lg overflow-hidden group shadow-lg max-w-sm upper-part'>
                <img className='w-full' src={product.img} alt="" />
                <div
                    className='bg-slate-50 w-full rounded-b-lg text-black bottom-part flex justify-center items-center flex-col'>
                    <p className='text-center text-sm hover:text-sky-500'>{product.productName}</p>
                    <p className='text-center font-bold'>{'$'}{product.price}</p>
                    <p className='text-center'>
                        <Rating
                            initialRating={product?.review}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod', marginTop: '5px' }} icon={faStar} />}
                            readonly>
                        </Rating>
                    </p>
                    <button
                        className='rounded px-10 py-1 mt-2 text-white font-bold background-color hover:bg-sky-500 duration-300'>
                        Manage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;