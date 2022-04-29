import React, { useState } from 'react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import img from '../../../assets/images/slide-1.png'
import img2 from '../../../assets/images/slide-2.png'
import img3 from '../../../assets/images/slide-3.png'
import './Banner.css';

const slides = [img, img2, img3];

const Banner = () => {
    const [current, setCurrent] = useState(0);
    const length = slides?.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides?.length <= 0) {
        return null;
    }
    return (
        <div className='w-full flex relative'>
            <button className='text-lg md:text-3xl text-black absolute left-1 top-0 bottom-0 z-10' onClick={prevSlide}>
                <div className='bg-opacity-10 bg-slate-500 px-1 md:px-2 py-2 md:py-5'>
                    <AiOutlineDoubleLeft />
                </div>
            </button>
            <>
                {slides.map((img, index) => {
                    return (
                        <div className={index === current ? 'active' : ''} key={index}>
                            {index === current && (
                                <div className='bg-cover bg-center'>
                                    <img className='w-full' src={img} alt="" />
                                </div>
                            )}
                        </div>
                    )
                })}
            </>
            <button className='text-lg md:text-3xl text-black absolute right-1 top-0 bottom-0 z-10' onClick={nextSlide}>
                <div className='bg-opacity-10 bg-slate-500 px-1 md:px-2 py-2 md:py-5'>
                    <AiOutlineDoubleRight />
                </div>
            </button>
        </div>
    );
};

export default Banner;