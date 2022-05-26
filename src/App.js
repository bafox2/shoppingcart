import './css/App.css'
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import {BrowserRouter, Switch, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" element = {Home}/>
      </Switch>
    </div>
  );
}

export default App;
