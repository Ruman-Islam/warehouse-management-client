import { AiOutlineDoubleRight } from "react-icons/ai";
import { faHeadset, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from '../../../assets/images/double-img-2.webp'
import img3 from '../../../assets/images/double-img-1.webp'
import './Banner.css';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row h-[100vh] md:h-[80vh] justify-center items-center w-4/5 mx-auto my-20 md:my-0 '>
            <div className='relative basis-3/6 md:mt-0 hidden md:block'>
                <div className="flex justify-end md:w-3/4"><img className="w-full md:w-3/4" src={img3} alt="" /></div>
                <div className='md:absolute top-0 md:top-72 md:left-10'><img className="w-2/3 md:w-full" src={img2} alt="" /></div>
            </div>
            <div className='basis-3/6 mt-20 md:mt-0'>
                <div>
                    <div className='flex items-center text-3xl text-red-500'>
                        <AiOutlineDoubleRight />
                        <h2 className='pl-5 my-5 font-bold'>ABOUT US</h2>
                    </div>
                    <h1 className='text-5xl leading-tight my-2 md:my-5'>We are trusted &amp; professional logistic company</h1>
                    <p>The Shelter is one of the trusted online gadgets warehouse in Bangladesh. SBD is all about world class electronic warehouse. We provide electronic and Gadgets warehouse facilities. We provide delivery within 24-48 hours throughout the whole Bangladesh.</p>
                </div>
                <div className='flex mb-20 md:mt-10 py-10 justify-around w-full flex-col md:flex-row'>
                    <div className='flex basis-3/6 items-center mb-10 md:mb-0'>
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