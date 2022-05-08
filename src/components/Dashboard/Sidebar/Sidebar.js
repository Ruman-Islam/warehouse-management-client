import {
    AiOutlineHome,
    AiFillTool,
    AiOutlineOrderedList,
    AiOutlineLogout,
    AiFillCaretUp,
    AiOutlineAlignLeft,
    AiOutlinePlus,
    AiOutlineAppstore
} from "react-icons/ai";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import photoPlaceHolder from '../../../assets/images/photoplaceholder.jpg';
import UseSignOut from "../../../Hooks/UseSignOut";
import auth from '../../../Firebase/Firebase.config';
import './Sidebar.css';

const Sidebar = ({ openNav, setOpenNav }) => {
    const location = useLocation()
    const [user, ,] = useAuthState(auth);
    const navigate = useNavigate();
    const { handleSignOut } = UseSignOut();
    return (
        <>
            <div onClick={() => setOpenNav(!openNav)} className='w-12 h-8 md:hidden text-xl ml-5 flex items-center'>
                {openNav ? <AiFillCaretUp /> : <AiOutlineAlignLeft />}
            </div>
            <aside className='w-72 py-8 sidebar-full-screen text-center flex flex-col h-[100vh] sticky top-0'>
                <div className='flex flex-col my-5'>
                    <h1 className="text-white text-2xl mb-5 ml-10 font-semibold text-left">The Shelter</h1>
                    {user?.email &&
                        <div className='inner-container'>
                            <div className='icon'>
                                <img className='w-8 h-8 rounded-full' src={user?.photoURL ? user?.photoURL : photoPlaceHolder} alt="" />
                            </div>
                            <div className='button'>
                                <span>
                                    {user?.displayName}
                                </span>
                            </div>
                        </div>}
                    <div>
                        <div
                            onClick={() => navigate('/home')}
                            className='inner-container primary-color home-button cursor-pointer'>
                            <div className='icon'><AiOutlineHome /></div>
                            <div className='button'>
                                <button className="font-bold"
                                >HOME
                                </button>
                            </div>
                        </div>
                        <div
                            onClick={() => navigate('/dashboard/inventory-list')}
                            className='inner-container cursor-pointer'>
                            <div className='icon'><AiOutlineOrderedList /></div>
                            <div className='button'>
                                <button
                                    className={
                                        (location.pathname === '/dashboard/inventory-list'
                                            || location.pathname === '/dashboard')
                                        && 'active-link'}
                                >Manage Inventory
                                </button>
                            </div>
                        </div>
                        {user?.email &&
                            <div
                                onClick={() => navigate('/dashboard/my-items')}
                                className='inner-container cursor-pointer'>
                                <div className='icon'><AiFillTool /></div>
                                <div className='button'>
                                    <button>
                                        Manage Items
                                    </button>
                                </div>
                            </div>}
                        {(location.pathname === '/dashboard/my-items' || location.pathname === '/dashboard/add-item') &&
                            <div className=" text-white flex flex-col px-8 text-xs animation">
                                <div
                                    onClick={() => navigate('/dashboard/my-items')}
                                    className="inner-container cursor-pointer">
                                    <div className='icon'><AiOutlineAppstore /></div>
                                    <div className='button'>
                                        <button
                                            className={location.pathname === '/dashboard/my-items' && 'active-link'}>
                                            My Items
                                        </button>
                                    </div>
                                </div>
                                <div
                                    onClick={() => navigate('/dashboard/add-item')}
                                    className="inner-container cursor-pointer">
                                    <div className='icon'><AiOutlinePlus /></div>
                                    <div className='button'>
                                        <button
                                            className={location.pathname === '/dashboard/add-item' && 'active-link'}>
                                            Add Item
                                        </button>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    {user?.email &&
                        <div
                            onClick={handleSignOut}
                            className='inner-container cursor-pointer'>
                            <div className='icon'><AiOutlineLogout /></div>
                            <div className='button'>
                                <button
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
                    <li className="absolute top-0 right-12 -translate-y-8">
                        <button
                            onClick={handleSignOut}
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
                    <li>
                        <button
                            onClick={() => navigate('/dashboard/my-items')}
                        >Manage Items
                        </button>
                    </li>
                    {(location.pathname === '/dashboard/my-items' || location.pathname === '/dashboard/add-item') &&
                        <li>
                            <li
                                className={location.pathname === '/dashboard/my-items' && 'active-link'}
                                onClick={() => navigate('/dashboard/my-items')}
                            >My Items</li>
                            <li
                                className={location.pathname === '/dashboard/add-item' && 'active-link'}
                                onClick={() => navigate('/dashboard/add-item')}
                            >Add Item</li>
                        </li>}
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;