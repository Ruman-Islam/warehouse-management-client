import InventoriesTable from './InventoriesTable';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import Spinner from '../../../Shared/Spinner/Spinner';
import Pagination from '../../../Shared/Pagination/Pagination';
import UseProductDelete from '../../../../Hooks/UseProductDelete';
import UseGetProducts from '../../../../Hooks/UseGetProducts';

const MyItems = () => {
    const { products,
        setProducts,
        userTotalProducts,
        totalPage,
        isLoading,
        pageNumber,
        setPageNumber,
        limit,
        setLimit } = UseGetProducts('my-items');
    const { handleDelete } = UseProductDelete(products, setProducts);

    return (
        <div className="py-5">
            <PageTitle title="My Items" />
            <h1 className='ml-5 mb-5 text-sm'>Total {userTotalProducts} results</h1>
            <>
                {isLoading ? <Spinner />
                    :
                    <InventoriesTable products={products} handleDelete={handleDelete} />
                }
            </>
            <Pagination
                totalPage={totalPage}
                isLoading={isLoading}
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
                userTotalProducts={userTotalProducts}
                setLimit={setLimit}
                limit={limit} />
        </div>
    );
};

export default MyItems;