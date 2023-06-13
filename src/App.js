import Header from './components/header/Header';
import InforShop from './pages/InforShop/InforShop';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import './App.css'

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className= "App">
      
      <Routes >
        <Route path='/' element={<div><Header /> <Home/></div>} />
        <Route path='/login' element={<div><Header /> <Login /></div>} />
        <Route path='/infor/:id' element={<div><Header /> <InforShop /></div>} />
        <Route path='/home' element={<div><Header /> <Home /></div>} />
      </Routes >
    </div>
  );
}


export default App;
