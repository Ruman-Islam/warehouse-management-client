import { AiOutlineDoubleRight } from "react-icons/ai";
import { faHeadset, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from '../../../assets/images/double-img-2.webp'
import img3 from '../../../assets/images/double-img-1.webp'
import './Banner.css';

const Banner = () => {
    return (
        <div className='flex h-[80vh] justify-center items-center w-4/5 mx-auto mb-20'>
            <div className='relative basis-3/6 pl-36'>
                <div><img src={img3} alt="" /></div>
                <div className='absolute top-20 md:top-96 left-[-10px]'><img src={img2} alt="" /></div>
            </div>
            <div className='basis-3/6'>
                <div>
                    <div className='flex items-center text-3xl text-red-500'>
                        <AiOutlineDoubleRight />
                        <h2 className='pl-5 my-5 font-bold'>ABOUT US</h2>
                    </div>
                    <h1 className='text-5xl leading-tight my-5'>We are trusted &amp; professional logistic company</h1>
                    <p>The Shelter is one of the trusted online gadgets warehouse in Bangladesh. SBD is all about world class electronic warehouse. We provide electronic and Gadgets warehouse facilities. We provide delivery within 24-48 hours throughout the whole Bangladesh.</p>
                </div>
                <div className='flex my-10 py-10 justify-around w-full'>
                    <div className='flex basis-3/6 items-center'>
                        <div className='text-6xl basis-1/6 pr-5 text-red-500'>
                            <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <div className='basis-3/6'>
                            <h1 className='text-md font-semibold'>24/7 hours customer support</h1>
                        </div>
                    </div>
                    <div className='flex basis-3/6 items-center'>
                        <div className='text-6xl basis-1/6 pr-5 text-red-500'>
                            <FontAwesomeIcon icon={faClockRotateLeft} />
                        </div>
                        <div className='basis-3/6'>
                            <h1 className='text-md font-semibold'>Properly on time Delivery to the person</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;