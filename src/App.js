import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar'
import ProductCard from './Components/ProductCard'
import CartPage from './Components/CartPage';
import Login from './Components/Login';
import Protected from './Components/Protected';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <br />
    <Routes>
    <Route  path ="/" element={<ProductCard/>} />
    <Route path='/login' element={<Login />}/>
    <Route  path ="/cart" element={<CartPage />}/>
    </Routes>

  
   
    </div>
    </BrowserRouter>
  );
}

export default App;
