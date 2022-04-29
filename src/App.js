import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Inventory from './components/Inventory/Inventory';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/inventoryDetail/:productId' element={<InventoryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
