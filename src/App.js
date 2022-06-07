import './css/App.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Item from './components/Item';
import Product from './components/Product';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Switch, Routes, Route, Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:name" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
