import React from 'react';
import Spinner from '../../../Shared/Spinner/Spinner';
import Pagination from '../../../Shared/Pagination/Pagination';
import UseProductDelete from '../../../../Hooks/UseProductDelete';
import InventoriesTable from '../ManageInventory/InventoriesTable';
import UseGetProducts from '../../../../Hooks/UseGetProducts';
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import './InventoryList.css';

const InventoryList = () => {
    const navigate = useNavigate();
    const {
        products,
        setProducts,
        totalProductCount,
        isLoading,
        totalPage,
        pageNumber,
        setPageNumber,
        limit,
        setLimit,
        changeState,
        setChangeState,
        error
    } = UseGetProducts('inventory-list');
    const { handleDelete } = UseProductDelete(products, setProducts, changeState, setChangeState);

    return (
        <>
            {isLoading ? <Spinner />
                :
                <div className="h-full bg-gray-100">
                    <div className='flex justify-between px-20 py-2 items-center'>
                        <h1 className='text-sm mt-2'>Total {totalProductCount} results</h1>
                        <div
                            onClick={() => navigate('/dashboard/add-item')}
                            className='flex items-center border border-sky-700 px-5 py-1 rounded hover:bg-transparent hover:text-sky-700 bg-sky-700 text-white cursor-pointer text-xs'>
                            <span className='pr-2'><AiOutlinePlus /></span>
                            <span>
                                <button>Add Item</button>
                            </span>
                        </div>
                    </div>
                    <div>
                        <InventoriesTable products={products} handleDelete={handleDelete} error={error} />
                    </div>
                    {totalProductCount !== 0 &&
                        <Pagination
                            isInventoryList
                            limit={limit}
                            isLoading={isLoading}
                            totalPage={totalPage}
                            pageNumber={pageNumber}
                            totalProductCount={totalProductCount}
                            setPageNumber={setPageNumber}
                            setLimit={setLimit}
                        />}
                </div>}
        </>
    );
};

export default InventoryList;