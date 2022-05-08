import React from 'react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Pagination = ({
    isLoading,
    isInventoryList,
    totalPage,
    setPageNumber,
    pageNumber,
    setLimit,
    totalProductCount,
    userTotalProducts,
    limit }) => {

    const prevPage = () => {
        if (pageNumber > 0) {
            const pageNo = pageNumber - 1;
            setPageNumber(pageNo);
        }
    }
    const nextPage = () => {
        if (totalPage > pageNumber + 1) {
            const pageNo = pageNumber + 1;
            setPageNumber(pageNo);
        }
    }

    return (
        <>
            {isLoading ||
                <div className='flex justify-center my-10 mx-auto'>
                    <>
                        <button
                            className='mr-5 text-lg duration-300 hover:scale-150 hover:text-blue-900'
                            onClick={prevPage}>
                            <AiOutlineDoubleLeft />
                        </button>
                        { // here making an array for picking sequel of 1, 2, 3
                            // for maintaining page number dynamically
                            [...Array(totalPage).keys()]
                                .map(pgNumber =>
                                    <button key={pgNumber}
                                        className={`border p-2 hover:bg-blue-900 shadow-lg hover:text-white duration-100
                                         ${pageNumber === pgNumber ? 'bg-blue-900 text-white' : ''}`}
                                        onClick={() => setPageNumber(pgNumber)}>
                                        {pgNumber + 1}
                                    </button>
                                )
                        }
                        <button
                            className='ml-5 text-lg duration-300 hover:scale-150 hover:text-blue-900'
                            onClick={nextPage}>
                            <AiOutlineDoubleRight />
                        </button>
                    </>
                    <div>
                        <select className='border shadow-lg p-2 ml-5 outline-none bg-transparent rounded-lg' defaultValue={limit}
                            onChange={(e) => setLimit(e.target.value)}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value={isInventoryList ? totalProductCount : userTotalProducts}>All</option>
                        </select>
                    </div>
                </div>
            }
        </>
    );
};

export default Pagination;