import React from 'react';
import Spinner from '../../../Shared/Spinner/Spinner';
import Pagination from '../../../Shared/Pagination/Pagination';
import UseProductDelete from '../../../../Hooks/UseProductDelete';
import InventoriesTable from '../ManageInventory/InventoriesTable';
import UseGetProducts from '../../../../Hooks/UseGetProducts';
import './InventoryList.css';

const InventoryList = () => {
    const {
        products,
        setProducts,
        totalProductCount,
        isLoading,
        totalPage,
        pageNumber,
        setPageNumber,
        limit,
        setLimit

    } = UseGetProducts('inventory-list');
    const { handleDelete } = UseProductDelete(products, setProducts);

    return (
        <div className="py-5">
            <h1 className='ml-5 mb-5 text-sm'>Total {totalProductCount} results</h1>
            <>
                {isLoading ? <Spinner />
                    :
                    <InventoriesTable products={products} handleDelete={handleDelete} />
                }
            </>
            <Pagination
                isInventoryList
                limit={limit}
                isLoading={isLoading}
                totalPage={totalPage}
                pageNumber={pageNumber}
                totalProductCount={totalProductCount}
                setPageNumber={setPageNumber}
                setLimit={setLimit}
            />
        </div>
    );
};

export default InventoryList;