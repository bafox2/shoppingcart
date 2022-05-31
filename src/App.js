import './css/App.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Switch, Routes, Route, Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
