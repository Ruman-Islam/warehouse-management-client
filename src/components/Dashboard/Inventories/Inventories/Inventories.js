import { useLocation } from "react-router-dom";
import UseGetProducts from "../../../../Hooks/UseGetProducts";
import Product from "../../../Product/Product";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Spinner from "../../../Shared/Spinner/Spinner";

const Inventories = ({ isHome }) => {
    const { hash } = useLocation();
    const { products, isLoading } = UseGetProducts();

    return (
        <>
            {hash.includes('#header') && <Navbar />}
            <div className='mt-5 py-5'>
                <PageTitle title="Inventory" />
                {isHome && <div className="text-center text-sm mb-10">
                    <h1 className='text-center text-4xl mb-2'>Inventories</h1>
                    <p className="text-slate-600 leading-5">A lots of inventories is stored in this please. Managing them by your hand with your own choice.</p>
                    <p className="text-slate-600">There are many inventories, here is showing some of them.</p>
                </div>}
                <div className="py-5">
                    <>
                        {isLoading ? <Spinner />
                            :
                            <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto animation'>
                                {isHome ?
                                    products?.slice(0, 6).map(product => <Product key={product._id} product={product} />)
                                    :
                                    products?.map(product => <Product key={product._id} product={product} />)}
                            </div>
                        }
                    </>
                </div>
            </div> <br /><br /><br /><br />
            {hash.includes('#header') && <Footer />}
        </>
    );
};

export default Inventories;