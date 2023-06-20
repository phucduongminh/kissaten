import React from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/header/Header';
import InforShop from './pages/InforShop/InforShop';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Bookmarkpage from './pages/Bookmark/Bookmarkpage';
import Approve from './pages/Approve/Approve';
import Search from './pages/Search/search';
import Prehome from './pages/Prehome/Prehome';
import Preheader from './components/preheader/Preheader';

import './App.css';

const App = () => {
  const user = useSelector((state) => state.login.user);
  
  return (
    <div className="App">
      {user && <Header username={user.username} uid={user.uid}/>} {/* Hiển thị <Header /> nếu đã đăng nhập */}
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to={`/${user.uid}`} replace={true} />
            ) : (
              <div>
                <Preheader />
                <Prehome />
              </div>
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/inforshop/:id/:uid"
          element={
            <div>
              <InforShop />
            </div>
          }
        />
        <Route
          path="/bookmark"
          element={
            user ? (
              <Navigate to={`/bookmark/${user.uid}`} replace={true} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/bookmark/:uid"
          element={
            <div>
              <Bookmarkpage />
            </div>
          }
        />
        <Route
          path="/approve"
          element={
            <div>
              <Approve />
            </div>
          }
        />
        <Route
          path="/search/:cafeName/:area/:service/:status/:uid"
          element={
            <div>
              <Search />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div>
              <Signup />
            </div>
          }
        />
        <Route
          path="/:uid"
          element={
            <div>
              <Home />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
