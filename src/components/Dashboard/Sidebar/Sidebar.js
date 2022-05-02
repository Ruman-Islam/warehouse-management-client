import {
    AiOutlineHome,
    AiOutlineFileAdd,
    AiOutlineOrderedList,
    AiOutlineTag,
    AiTwotoneAppstore,
    AiOutlineLogout,
    AiFillCaretUp,
    AiOutlineAlignLeft
} from "react-icons/ai";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../Firebase/Firebase.config';
import photoPlaceHolder from '../../../assets/images/photoplaceholder.jpg';
import './Sidebar.css';

const Sidebar = ({ openNav, setOpenNav }) => {
    const location = useLocation()
    const [user, ,] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <>
            <div onClick={() => setOpenNav(!openNav)} className='w-12 h-8 md:hidden text-xl ml-5 flex items-center'>
                {openNav ? <AiFillCaretUp /> : <AiOutlineAlignLeft />}
            </div>
            <aside className='w-80 py-8 sidebar-full-screen text-center flex flex-col h-[100vh] sticky top-0'>
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
                            <button className="font-bold"
                                onClick={() => navigate('/home')}
                            >HOME
                            </button>
                        </div>
                    </div>
                    <div className='inner-container'>
                        <div className='icon'><AiTwotoneAppstore /></div>
                        <div className='button'>
                            <button
                                onClick={() => navigate('/dashboard/inventory-list')}
                                className={
                                    (location.pathname === '/dashboard/inventory-list'
                                        || location.pathname === '/dashboard')
                                    && 'active-link'}
                            >Manage Inventory
                            </button>
                        </div>
                    </div>
                    <div className='inner-container'>
                        <div className='icon'><AiOutlineOrderedList /></div>
                        <div className='button'>
                            <button
                                onClick={() => navigate('/dashboard/inventories')}
                                className={location.pathname === '/dashboard/inventories' && 'active-link'}
                            >Inventories
                            </button>
                        </div>
                    </div>
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'><AiOutlineFileAdd /></div>
                            <div className='button'>
                                <button
                                    onClick={() => navigate('/dashboard/add-item')}
                                    className={location.pathname === '/dashboard/add-item' && 'active-link'}
                                >Add Item
                                </button>
                            </div>
                        </div>}
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'><AiOutlineTag /></div>
                            <div className='button'>
                                <button
                                    onClick={() => navigate('/dashboard/my-items')}
                                    className={location.pathname === '/dashboard/my-items' && 'active-link'}
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
            <aside className={`sidebar-small-screen md:hidden w-full flex justify-center text-center text-white py-10 absolute ease-in duration-300 z-10 ${openNav ? 'top-10' : 'top-[-250px]'}`}>
                <ul className="relative w-full text-lg">
                    <li className="absolute top-0 right-2 -translate-y-8"> {user?.email &&
                        <img className='w-8 h-8 rounded-full mx-auto'
                            src={user?.photoURL ? user?.photoURL : photoPlaceHolder} alt="" />}
                    </li>
                    <li className="absolute left-4 -translate-y-8">
                        <button className="font-semibold" onClick={() => navigate('/home')}>Home</button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate('/dashboard/inventories')}
                            className={location.pathname === '/dashboard/inventories' && 'active-link'}
                        >Inventories
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate('/dashboard/add-item')}
                            className={location.pathname === '/dashboard/add-item' && 'active-link'}
                        >Add Item
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate('/dashboard/my-items')}
                            className={location.pathname === '/dashboard/my-items' && 'active-link'}
                        >My Items
                        </button>
                    </li>
                    <li className="absolute top-0 right-12 -translate-y-8">
                        <button
                            onClick={() => signOut(auth) + navigate('/home')}
                            className='text-lg font-semibold'
                        >Logout
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate('/dashboard/inventory-list')}
                            className={location.pathname === '/dashboard/inventory-list' && 'active-link'}
                        >Manage Inventory
                        </button>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;