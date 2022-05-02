import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found'>
            <h1
                onClick={() => navigate('/home')}
                className='text-center text-4xl pt-10 font-bold cursor-pointer underline decoration-1'>Back to Home</h1>
        </div>
    );
};

export default NotFound;