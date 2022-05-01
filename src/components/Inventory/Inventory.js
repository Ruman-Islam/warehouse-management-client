import Products from "../Products/Products";

const Inventory = ({ isHome }) => {

    return (
        <div className='mt-5 mb-10 py-5'>
            <div className="text-center text-sm mb-10">
                <h1 className='text-center text-4xl mb-2'>Inventories</h1>
                <p className="text-slate-600 leading-5">A lots of inventories is stored in this please. Managing them by your hand with your own choice.</p>
                <p className="text-slate-600">There are many inventories, here is showing some of them.</p>
            </div>
            <div className="py-5">
                <Products isHome={isHome} />
            </div>
        </div>
    );
};

export default Inventory;