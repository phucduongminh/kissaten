import Header from './components/header/Header';
import InforShop from './pages/InforShop/InforShop';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Bookmark from './pages/Bookmark/Bookmark';
import Approve from './pages/Approve/Approve';
import Search from './pages/Search/search';

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
        <Route path='/login' element={<Login />} />
        <Route path='/inforshop/:id' element={<div><Header /> <InforShop /></div>} />
        <Route path='/home' element={<div><Header /> <Home /></div>} />
        <Route path ='/bookmark' element={<div><Header /><Bookmark/></div>} />
        <Route path ='/approve' element= {<div><Header /><Approve /></div>} />
        <Route path ='/search' element= {<div><Header /><Search /></div>} />
        <Route path ='/signup' element= {<div><Header /><Signup /></div>} />
      </Routes >
    </div>
  );
}


export default App;
