import { AiOutlineDoubleRight } from "react-icons/ai";
import { faHeadset, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from '../../../assets/images/double-img-2.webp'
import img3 from '../../../assets/images/double-img-1.webp'
import './Banner.css';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row h-[70vh] xl:h-[65vh] 2xl:h-[80vh] justify-center items-center w-4/5 mx-auto my-20 xl:mt-0'>
            <div className='relative basis-3/6 md:mt-0 hidden md:block'>
                <div className="flex justify-end xl:w-4/6 2xl:w-4/5">
                    <img className="w-full xl:w-4/6 2xl:w-4/5" src={img3} alt="" />
                </div>
                <div className='absolute top-0 xl:top-52 2xl:top-96 md:left-10'>
                    <img className="w-2/3 xl:w-2/4 2xl:w-full" src={img2} alt="" />
                </div>
            </div>
            <div className='basis-3/6 mt-10 xl:mt-20 2xl:mt-0'>
                <div>
                    <div className='flex items-center text-xl xl:text-2xl 2xl:text-3xl text-red-500'>
                        <AiOutlineDoubleRight />
                        <h2 className='pl-5 xl:my-0 2xl:my-5 font-bold'>ABOUT US</h2>
                    </div>
                    <h1 className='text-2xl xl:text-3xl 2xl:text-5xl 2xl:leading-tight my-2 md:my-5'>We are trusted &amp; professional logistic company</h1>
                    <p>The Shelter is one of the trusted online gadgets warehouse in Bangladesh. SBD is all about world class electronic warehouse. We provide electronic and Gadgets warehouse facilities. We provide delivery within 24-48 hours throughout the whole Bangladesh.</p>
                </div>
                <div className='flex mb-0 xl:mt-0 2xl:mt-10 py-10 justify-around w-full flex-col md:flex-row'>
                    <div className='flex basis-3/6 items-center mb-10 md:mb-0'>
                        <div className='text-4xl xl:text-4xl 2xl:text-5xl basis-1/6 pr-5 text-red-500'>
                            <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <div className='basis-3/6'>
                            <h1 className='text-sm font-semibold'>24/7 hours customer support</h1>
                        </div>
                    </div>
                    <div className='flex basis-3/6 items-center'>
                        <div className='text-4xl xl:text-3xl 2xl:text-5xl basis-1/6 pr-5 text-red-500'>
                            <FontAwesomeIcon icon={faClockRotateLeft} />
                        </div>
                        <div className='basis-3/6'>
                            <h1 className='text-sm font-semibold'>Properly on time Delivery to the person</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;