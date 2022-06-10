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
  const [filterList, setFilterList] = React.useState({
    produce: true,
    flowers: true,
    microgreens: true,
    sort: 'priceHigh',
    search: ''
  })
  const [cartList, setCartList] = React.useState([])
  function onItemBuy(selectedProduct) {
    // this creates a new object still
    const isInCart = checkDuplicate(selectedProduct)
    isInCart ?
      setCartList(cartList.map(currentCartEntry => {
        if (currentCartEntry.item.name === selectedProduct.name) {
          // Create a *new* object with changes
          return { ...currentCartEntry, quantity: currentCartEntry.quantity + 1 };
        } else {
          // No changes
          return currentCartEntry;
        }
      }))
      :
      setCartList([
        ...cartList, {
          item: selectedProduct,
          quantity: 1,
        }
      ])
  }

  function checkDuplicate(prospectiveCartEntry) {
    return cartList.some(arrVal => prospectiveCartEntry.name === arrVal.item.name);
  }

  function handleIncrement(selectedCartItem, crement) {
    console.log(crement, selectedCartItem)
    setCartList(cartList.map(cartItem => {
      if (cartItem.item.name === selectedCartItem.name) {
        // Create a *new* object with changes
        if (crement) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        } else if (cartItem.quantity >= 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        } else {
          return cartItem
        }
      } else {
        return cartItem
      }
    }))
  }

  function handleRemove(selectedCartItem) {
    setCartList(cartList.filter(currentCartEntry => currentCartEntry.item !== selectedCartItem))
  }

  function calculateHeaderCartItems() {
    return cartList ? cartList.length : 0
  }

  const handleFilterChange = (event) => {
    console.log(event)
    const { name, value, type, checked } = event.target
    setFilterList((prevOptions) => {
      return {
        ...prevOptions,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  return (
    <div className="App">
      <Header cartNum={calculateHeaderCartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/cart" element={<Sidecart cart={cartList} onCrement={handleIncrement} onRemove={handleRemove} />} />
        <Route path="/shop" element={<Shop filters={filterList} handleChange={handleFilterChange} />} />
        <Route path="/shop/:id" element={<Product onSubmit={onItemBuy} />} />
      </Routes>
    </div>
  );
}

export default App;
