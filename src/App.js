import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/cart' element={<ShoppingCart/>} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
