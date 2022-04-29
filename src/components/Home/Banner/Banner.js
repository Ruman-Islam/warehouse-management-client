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
        <div className='w-full'>
            <div className='flex relative'>
                <button className='text-3xl text-white absolute left-5 top-0 bottom-0' onClick={prevSlide}>
                    <AiOutlineDoubleLeft className='arrow' />
                </button>
                {slides.map((img, index) => {
                    return (
                        <div className={index === current ? 'duration-300 ease-in opacity-100' : 'opacity-0 scale-75'} key={index}>
                            {index === current && (
                                <div className='bg-cover bg-center'>
                                    <img className='w-full' src={img} alt="" />
                                </div>
                            )}
                        </div>
                    )
                })}
                <button className='text-3xl text-white absolute right-5 top-0 bottom-0' onClick={nextSlide}>
                    <AiOutlineDoubleRight className='arrow' />
                </button>
            </div>
        </div>
    );
};

export default Banner;