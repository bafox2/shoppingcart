import './css/App.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Product from './components/Product';
import Sidecart from './components/Sidecart'
import Learn from './pages/Learn'
import { Routes, Route } from 'react-router-dom'
import React from 'react';
function App() {
  //going to attempt to make the individual components pass the object referenced in allitems

  const [cartList, setCartList] = React.useState([])
  function onItemBuy(item) {
    // this creates a new object still
    const isInCart = checkDuplicate(item)
    isInCart ?
      setCartList(cartList.map(cartItem => {
        if (cartItem.name === item.name) {
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
          name: item.name,
          price: item.price,
          pic: item.imageref,
          id: item.id,
          quantity: 1,
        }
      ])
  }

  function checkDuplicate(item) {
    return cartList.some(arrVal => item.name === arrVal.name);
  }

  function handleIncrement(cartitem, crement) {
    setCartList(cartList.map(item => {
      if (item.name === cartitem.name) {
        // Create a *new* object with changes
        if (crement) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return { ...item, quantity: item.quantity + 1 }
        }
      } else {
        return item
      }
    }))
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
        <Route path="/cart" element={<Sidecart cart={cartList} onCrement={handleIncrement} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product onSubmit={onItemBuy} />} />
      </Routes>
    </div>
  );
}

export default App;
