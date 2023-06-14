import Header from './components/header/Header';
import './App.css';
import InforShop from './pages/InforShop/InforShop';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Bookmark from './pages/Bookmark/Bookmark';
import Approve from './pages/Approve/Approve';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/inforshop/:id' element={<InforShop />} />
        <Route path ='/bookmark' element={<Bookmark/>} />
        <Route path ='/approve' element= {<Approve />} />
      </Routes>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <InforShop /> */}
      {/* <Bookmark /> */}
      {/* <Approve /> */}
    </div>
  );
}

export default App;
