import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { productId } = useParams();
    console.log(productId);
    return (
        <div>
            <h1 className='text-center'>{productId}</h1>
        </div>
    );
};

export default InventoryDetail;