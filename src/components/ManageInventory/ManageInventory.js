import { Outlet, useNavigate } from 'react-router-dom';
import {
    AiOutlineHome,
    AiOutlineFileAdd,
    AiOutlineOrderedList,
    AiOutlineTag,
    AiTwotoneAppstore
} from "react-icons/ai";
import './ManageInventory.css';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.config';

const ManageInventory = () => {
    const [user, ,] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div className='flex h-[110vh] relative'>
            <aside className='w-80 py-8 sidebar text-center flex flex-col sticky'>
                <div className='flex flex-col my-5'>
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'> <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" /></div>
                            <div className='button'>
                                <span
                                >{user?.displayName}
                                </span>
                            </div>
                        </div>}
                    <div className='inner-container bg-white primary-color'>
                        <div className='icon'><AiOutlineHome /></div>
                        <div className='button'>
                            <button
                                onClick={() => navigate('/home')}
                            >HOME
                            </button>
                        </div>
                    </div>
                    <div className='inner-container'>
                        <div className='icon'><AiTwotoneAppstore /></div>
                        <div className='button'>
                            <button
                            ><CustomLink to='/manageInventory/inventory-list'>Manage Inventory</CustomLink>
                            </button>
                        </div>
                    </div>
                    <div className='inner-container'>
                        <div className='icon'><AiOutlineOrderedList /></div>
                        <div className='button'>
                            <button
                            ><CustomLink to='/manageInventory/inventories'>Inventories</CustomLink>
                            </button>
                        </div>
                    </div>
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'><AiOutlineFileAdd /></div>
                            <div className='button'>
                                <button
                                ><CustomLink to='/manageInventory/add-item'>Add Item</CustomLink>
                                </button>
                            </div>
                        </div>}
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'><AiOutlineTag /></div>
                            <div className='button'>
                                <button
                                ><CustomLink to='/manageInventory/my-items'>My Items</CustomLink>
                                </button>
                            </div>
                        </div>}
                </div>
            </aside>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default ManageInventory;