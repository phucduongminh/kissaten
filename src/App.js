import React from 'react';
//import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/header/Header';
import InforShop from './pages/InforShop/InforShop';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Bookmark from './pages/Bookmark/Bookmark';
import Approve from './pages/Approve/Approve';
import Search from './pages/Search/search';
import Prehome from './pages/Prehome/Prehome';
import Preheader from './components/preheader/Preheader';

import './App.css';

const App = () => {
  //const user = useSelector((state) => state.login.user);
  const user = 0;

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <div>
                <Header />
                <Home />
              </div>
            ) : (
              <Navigate to="/home" replace={true} />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/inforshop/:id" element={<div><Header /><InforShop /></div>} />
        <Route path="/bookmark" element={<div><Header /><Bookmark /></div>} />
        <Route path="/approve" element={<div><Header /><Approve /></div>} />
        <Route path="/search" element={<div><Header /><Search /></div>} />
        <Route path="/signup" element={<div><Signup /></div>} />
        <Route path="/home" element={<div><Preheader /><Prehome /></div>} />
      </Routes>
    </div>
  );
};

export default App;
