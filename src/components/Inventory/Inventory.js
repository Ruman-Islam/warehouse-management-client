import Products from "../Products/Products";

const Inventory = ({ isHome }) => {

    return (
        <div className='mt-5'>
            <h1 className='text-center text-4xl'>Inventory</h1>
            <Products isHome={isHome} />
        </div>
    );
};

export default Inventory;