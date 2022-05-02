import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
    AiOutlineHome,
    AiOutlineFileAdd,
    AiOutlineOrderedList,
    AiOutlineTag,
    AiTwotoneAppstore,
    AiOutlineLogout
} from "react-icons/ai";
import './ManageInventory.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.config';
import photoPlaceHolder from '../../assets/images/photoplaceholder.jpg';
import { signOut } from 'firebase/auth';

const ManageInventory = () => {
    const location = useLocation()
    const [user, ,] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div className='flex'>
            <aside className='w-80 py-8 sidebar text-center flex flex-col h-[100vh] sticky top-0'>
                <div className='flex flex-col my-5'>
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'>
                                <img className='w-8 h-8 rounded-full' src={user?.photoURL ? user?.photoURL : photoPlaceHolder} alt="" />
                            </div>
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
                                onClick={() => navigate('/manageInventory/inventory-list')}
                                className={location.pathname === '/manageInventory/inventory-list' && 'active-link'}
                            >Manage Inventory
                            </button>
                        </div>
                    </div>
                    <div className='inner-container'>
                        <div className='icon'><AiOutlineOrderedList /></div>
                        <div className='button'>
                            <button
                                onClick={() => navigate('/manageInventory/inventories')}
                                className={location.pathname === '/manageInventory/inventories' && 'active-link'}
                            >Inventories
                            </button>
                        </div>
                    </div>
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'><AiOutlineFileAdd /></div>
                            <div className='button'>
                                <button
                                    onClick={() => navigate('/manageInventory/add-item')}
                                    className={location.pathname === '/manageInventory/add-item' && 'active-link'}
                                >Add Item
                                </button>
                            </div>
                        </div>}
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'><AiOutlineTag /></div>
                            <div className='button'>
                                <button
                                    onClick={() => navigate('/manageInventory/my-items')}
                                    className={location.pathname === '/manageInventory/my-items' && 'active-link'}
                                >My Items
                                </button>
                            </div>
                        </div>}
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'><AiOutlineLogout /></div>
                            <div className='button'>
                                <button
                                    onClick={() => signOut(auth) + navigate('/home')}
                                    className='text-lg font-semibold'
                                >Logout
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