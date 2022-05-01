import React from 'react';
import { AiOutlineMail, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import supportIcon from '../../../assets/images/icon_support.webp';
import addressIcon from '../../../assets/images/icon_address.webp';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-slate-100'>
            <div className='background-color text-white flex flex-col md:flex-row justify-around items-center px-44 py-8 md:py-4'>
                <div className='flex items-center flex-col md:flex-row'>
                    <div className='w-20 text-6xl ml-5 md:ml-0'><AiOutlineMail /></div>
                    <div className='text-center md:text-left'>
                        <h1 className='font-bold'>SIGN UP FOR NEWSLETTERS</h1>
                        <small>Be the First to Know. Sign up for newsletter today</small>
                    </div>
                </div>
                <div className='text-center my-3 md:my-0'>
                    <input className='p-3 w-80 md:w-96 mb-2 md:mb-0' type="email" name="" placeholder='Enter your email address' />
                    <button className='p-3 bg-sky-600 font-bold'>SUBSCRIBE</button>
                </div>
                <div className='flex justify-center text-2xl w-64 md:w-1/12'>
                    <AiFillFacebook />
                    <AiFillTwitterCircle />
                    <AiFillInstagram />
                    <AiFillLinkedin />
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-around px-16 md:px-28 py-5 md:py-20'>
                <div className='md:w-1/4 w-full mb-5 md:mb-0'>
                    <h1 className='primary-color text-center md:text-left text-3xl font-extrabold'>Builders</h1>
                    <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                        <div>
                            <img src={supportIcon} alt="" />
                        </div>
                        <div className='mr-0 md:mr-32 text-center md:text-left'>
                            <p className='text-sm'>Call Customer Services, We Support 24/7:</p>
                            <p className='text-sm font-bold'>+8801536160661</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                        <div>
                            <img src={addressIcon} alt="" />
                        </div>
                        <div className='md:mr-48 text-center md:text-left'>
                            <p className='text-sm'>Address:</p>
                            <p className='text-sm font-bold'>PO Box 1622 Khilgaon, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className='text-center md:text-left mb-5 md:mb-0'>
                    <h1 className='font-bold text-xl'>CUSTOMER SERVICE</h1>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Contact us</p>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Help and advice</p>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Shipping & Returns</p>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Terms and conditions</p>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Refund Policy</p>
                </div>
                <div className='text-center md:text-left'>
                    <h1 className='font-bold text-xl'>ABOUT US</h1>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Who We Are ?</p>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Corporate Responsibility</p>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Bangladesh Laws</p>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Careers</p>
                    <p className='my-1 hover:text-sky-600 cursor-pointer duration-200 text-sm'>Privacy Policy</p>
                </div>
            </div>
            <div className='flex px-2 py-5 justify-center md:justify-start text-xs md:px-64 flex-wrap border'>
                <p>Nokia</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Samsung</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>HTC</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Laptop</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Smartphone</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Tablet</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Vinova</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Smartwatch</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Wireless Charger</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Company</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Iphone 7s Plus</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Nova Fashion</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Android Phone</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>IOS Phone</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>OPPO</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>USB Kingston 128gb</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Bluetooth Motorcycle Headset</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Speaker</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Headphone</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Huawei</p> <span className='mx-1 font-semibold text-slate-500'> |</span>
                <p>Zippo</p>
            </div>
            <div className='ml-0 text-center md:text-left text-xs md:text-lg md:ml-64 my-5'>Copyright ©{year} Ruman Islam. All rights reserved.</div>
        </div>
    );
};

export default Footer;