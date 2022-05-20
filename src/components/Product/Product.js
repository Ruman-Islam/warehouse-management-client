import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavHashLink } from 'react-router-hash-link';

const Product = (
    { product: {
        _id, img,
        productName, price,
        quantity, review,
        supplier } }
) => {

    return (
        <div className='shadow-lg w-full h-96 seller-info-card animation'>
            <div className='w-full h-full product-img'>
                <img className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <div className='seller-detail text-white text-center'>
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
                <NavHashLink
                    smooth to={`/inventory-detail/${_id}/#navbar`}
                    className='rounded px-5 md:px-10 py-1 mt-2 text-white text-sm font-bold background-color hover:bg-sky-500 duration-300'>
                    Manage
                </NavHashLink>
            </div>
        </div >
    );
};

export default Product;