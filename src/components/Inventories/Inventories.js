import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Spinner from "../Shared/Spinner/Spinner";

const Inventories = ({ isHome }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [changeState, setChangeState] = useState(false);

    useEffect(() => {
        const url = "http://localhost:5000/products";
        setIsLoading(true);
        (async () => {
            try {
                const { data } = await axios.get(url)
                setProducts(data.products);
                setIsLoading(false);
            } catch (err) {
                if (err.response.status === 404) {
                    console.log(err.response.status);
                    setChangeState(!changeState);
                    setIsLoading(false);
                }
            }
        })()
    }, [changeState])

    return (
        <div>
            <div className='mt-5 py-5'>
                {isHome && <div className="text-center text-sm mb-10">
                    <h1 className='text-center text-4xl mb-2'>Inventories</h1>
                    <p className="text-slate-600 leading-5">A lots of inventories is stored in this please. Managing them by your hand with your own choice.</p>
                    <p className="text-slate-600">There are many inventories, here is showing some of them.</p>
                </div>}
                <div className="py-5">
                    <>
                        {isLoading ? <Spinner />
                            :
                            <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
                                {isHome ?
                                    products?.slice(0, 6).map(product => <Product key={product._id} product={product} />)
                                    :
                                    products?.map(product => <Product key={product._id} product={product} />)
                                }
                            </div>
                        }
                    </>
                </div>
            </div>
        </div>
    );
};

export default Inventories;