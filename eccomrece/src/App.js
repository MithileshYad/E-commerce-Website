// import logo from './logo.svg';
// import './App.css';

import { Routes, Route, useNavigate, createSearchParams } from 'react-router-dom'

import { NavBar } from './components';
import { Product } from './pages/product';
import { Products } from './pages/products';
import { Cart } from './pages/cart';
import { NotFound } from './pages/not-found';


function App() {
  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path ="/" element={<Products/>}/>
        <Route path ="/product/:productId" element={<Product/>}/>
        <Route path ="/cart" element={<Cart/>}/>
        <Route path ="*" element={<NotFound/>}/>

      </Routes>
    </>
  );
}

export default App;
