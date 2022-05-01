import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Registration from './components/Login/Registration';
import PrivateRoute from './components/Login/PrivateRoute';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import './App.css';
import Inventories from './components/Inventories/Inventories';
import InventoryList from './components/InventoryList/InventoryList';

function App() {
  return (
    <div className="App page-container">
      <div className='content-wrap'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/inventories' element={<Inventories />} />
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
            <Route path='inventories' element={<InventoryList />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
