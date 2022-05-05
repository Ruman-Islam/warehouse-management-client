import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import InventoryDetail from './components/Dashboard/Inventories/InventoryDetail/InventoryDetail';
import InventoryList from './components/Dashboard/Inventories/InventoryList/InventoryList';
import Inventories from './components/Dashboard/Inventories/Inventories/Inventories';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddItem from './components/Dashboard/Inventories/ManageInventory/AddItem';
import MyItems from './components/Dashboard/Inventories/ManageInventory/MyItems';
import Registration from './components/Login/Registration';
import PrivateRoute from './components/Login/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import ResetPassword from './components/Login/ResetPassword';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App page-container">
      <div className='content-wrap'>
        <HelmetProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/inventories' element={<Inventories />} />
            <Route path='/inventoryDetail/:productId' element={
              <PrivateRoute>
                <InventoryDetail />
              </PrivateRoute>
            } />
            <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }>
              <Route index element={<InventoryList />} />
              <Route path='/dashboard/inventory-list' element={<InventoryList />} />
              <Route path='/dashboard/inventories' element={<Inventories />} />
              <Route path='/dashboard/add-item' element={<AddItem />} />
              <Route path='/dashboard/my-items' element={<MyItems />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "background-color" }} />
    </div>
  );
}

export default App;
