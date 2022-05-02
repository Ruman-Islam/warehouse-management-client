import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Registration from './components/Login/Registration';
import PrivateRoute from './components/Login/PrivateRoute';
// import Navbar from './components/Shared/Navbar/Navbar';
// import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Inventories from './components/Inventories/Inventories';
import InventoryList from './components/InventoryList/InventoryList';
import AddItem from './components/ManageInventory/AddItem';
import MyItems from './components/ManageInventory/MyItems';
import './App.css';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App page-container">
      <div className='content-wrap'>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/inventoryDetail/:productId' element={
            <PrivateRoute>
              <InventoryDetail />
            </PrivateRoute>
          } />
          <Route path='/manageInventory' element={
            <PrivateRoute>
              <ManageInventory />
            </PrivateRoute>
          }>
            <Route index element={<InventoryList />} />
            <Route path='/manageInventory/inventory-list' element={<InventoryList />} />
            <Route path='/manageInventory/inventories' element={<Inventories />} />
            <Route path='/manageInventory/add-item' element={<AddItem />} />
            <Route path='/manageInventory/my-items' element={<MyItems />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
