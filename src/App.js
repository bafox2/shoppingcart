import './css/App.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/" element={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
