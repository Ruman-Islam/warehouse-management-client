import { Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineFileAdd, AiOutlineOrderedList, AiOutlineTag, AiTwotoneAppstore } from "react-icons/ai";
import './ManageInventory.css';
import CustomLink from '../CustomLink/CustomLink';

const ManageInventory = () => {
    const navigate = useNavigate();
    return (
        <div className='flex h-[110vh] relative'>
            <aside className='w-80 py-8 sidebar text-center flex flex-col sticky'>
                <div className='flex flex-col my-5'>
                    <div className='bg-white w-full'>
                        <div className='grid grid-cols-2 items-center mx-auto w-4/5 my-2'>
                            <span className='pl-16'><AiOutlineHome /></span>
                            <button
                                onClick={() => navigate('/home')}
                                className='cursor-pointer primary-color text-left'
                            >HOME
                            </button>
                        </div>
                    </div>
                    <div className='text-white w-full'>
                        <div className='flex items-center mx-auto w-5/5 my-2'>
                            <span className='pl-10 flex-1'><AiTwotoneAppstore /></span>
                            <button
                                className='cursor-pointer text-left flex-auto'
                            ><CustomLink to='/manageInventory/inventory-list'>Manage Inventory</CustomLink>
                            </button>
                        </div>
                    </div>
                    <div className='text-white w-full'>
                        <div className='flex items-center mx-auto w-5/5 my-2'>
                            <span className='pl-10 flex-1'><AiOutlineOrderedList /></span>
                            <button
                                className='cursor-pointer text-left flex-auto'
                            ><CustomLink to='/manageInventory/inventories'>Inventories</CustomLink>
                            </button>
                        </div>
                    </div>
                    <div className='text-white w-full'>
                        <div className='flex items-center mx-auto w-5/5 my-2'>
                            <span className='pl-10 flex-1'><AiOutlineFileAdd /></span>
                            <button
                                className='cursor-pointer text-left flex-auto'
                            ><CustomLink to='/manageInventory/add-item'>Add Item</CustomLink>
                            </button>
                        </div>
                    </div>
                    <div className='text-white w-full'>
                        <div className='flex items-center mx-auto w-5/5 my-2'>
                            <span className='pl-10 flex-1'><AiOutlineTag /></span>
                            <button
                                className='cursor-pointer text-left flex-auto'
                            ><CustomLink to='/manageInventory/my-items'>My Items</CustomLink>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default ManageInventory;