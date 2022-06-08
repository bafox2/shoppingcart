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
    // this creates a new object still
    const isInCart = checkDuplicate(item)
    isInCart ?
      setCartList(cartList.map(cartItem => {
        if (cartItem.name === item) {
          // Create a *new* object with changes
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          // No changes
          return cartItem;
        }
      }))
      :
      setCartList([
        ...cartList, {
          name: allItems.find(product => product.name === item).name,
          price: allItems.find(product => product.name === item).price,
          pic: allItems.find(product => product.name === item).imageref,
          quantity: 1,
        }
      ])
  }

  function checkDuplicate(item) {
    return cartList.some(arrVal => item === arrVal.name);
  }


  function calculateHeaderCartItems() {
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
