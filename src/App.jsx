import React from "react";
import Home from "./Pages/Home/Home";
import Productpage from "./Pages/Productpage/Product";
import {Routes, Route} from 'react-router'
import './App.css';
import Cart from "./Pages/Cart/Cart";

const App = () => {
  return (
    <Routes className='whole'>
      <Route path="/" element={<Home />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="product" element={<Productpage />} />
    </Routes>
  );
};

export default App;
