import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './TopSeller.css';

const TopSeller = ({ seller }) => {
    const { sellerName, img, origin, rating } = seller;
    return (
        <div className='rounded-b-lg group shadow-lg w-full h-96 seller-info-card'>
            <div className='w-full h-full'>
                <img className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <div className='seller-detail text-white text-center'>
                <h1 className='text-4xl'>{sellerName}</h1>
                <h1 className='text-2xl'>{origin}</h1>
                <Rating
                    className='text-xs text-amber-400'
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon icon={faStar} />}
                    readonly>
                </Rating>
                <button className='block mx-auto mt-5 bg-sky-700 px-10 py-2 rounded-sm'>View Detail</button>
            </div>
        </div >
    );
};

export default TopSeller;