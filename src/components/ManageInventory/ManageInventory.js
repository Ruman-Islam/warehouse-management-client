import { Outlet, useNavigate } from 'react-router-dom';
import './ManageInventory.css';

const ManageInventory = () => {
    const navigate = useNavigate();
    return (
        <div className='flex h-[100vh]'>
            <aside className='text-white w-80 py-8 px-2 sidebar text-center'>
                <button
                    onClick={() => navigate('/home')}
                    className='cursor-pointer text-2xl font-bold'
                >
                    HOME
                </button>
                <button
                    onClick={() => navigate('inventories')}
                    className='cursor-pointer background-color px-10 py-1 m-5 rounded font-semibold'
                >
                    All Inventories
                </button>
            </aside>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default ManageInventory;