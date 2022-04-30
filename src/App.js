import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Inventory from './components/Inventory/Inventory';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import Login from './components/Login/Login';
import Navbar from './components/Shared/Navbar/Navbar';
import PrivateRoute from './components/Login/PrivateRoute';
import Registration from './components/Login/Registration';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App page-container">
      <div className='content-wrap'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/inventoryDetail/:productId' element={
            <PrivateRoute>
              <InventoryDetail />
            </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
