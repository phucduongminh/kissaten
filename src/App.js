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
      <Header />
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/infor+id' element={<InforShop />} />
        <Route path='/home' element={<Home />} />
      </Routes >
    </div>
  );
}


export default App;
