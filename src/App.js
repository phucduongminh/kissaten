import Header from './components/header/Header';
import './App.css';

import InforShop from './pages/InforShop/InforShop';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <InforShop /> */}
      <Home />
      {/* < Login /> */}
    </div>
  );
}


export default App;
