import './css/App.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Item from './components/Item';
import allItems from './itemData/allItems';
import Product from './components/Product';
import Sidecart from './components/Sidecart'
import Learn from './pages/Learn'
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Switch, Routes, Route, Router } from 'react-router-dom'
import React from 'react';
function App() {

  const [cartList, setCartList] = React.useState([])
  function onItemBuy(item) {
    //might need to check if there is already a thing in the cart with the name and increment it
    setCartList([
      ...cartList,
      allItems.find(product => product.name === item).name]
    )
  }

  function calculateHeaderCartItems() {
    console.log(cartList)
    return cartList ? cartList.length : 0
  }

  return (
    <div className="App">
      <Header cartNum={calculateHeaderCartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/cart" element={<Sidecart cart={cartList} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:name" element={<Product onSubmit={onItemBuy} />} />
      </Routes>
    </div>
  );
}

export default App;
