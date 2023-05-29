import React, { useState } from 'react';
import './App.css';
import { RiSearchLine, RiCloseLine } from 'react-icons/ri';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [cafeName, setCafeName] = useState('');
  const [area, setArea] = useState('all');
  const [hasAC, setHasAC] = useState(false);
  const [status, setStatus] = useState('all');

  const handleSearchClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic tìm kiếm ở đây
    console.log("Đã submit tìm kiếm");
  };

  return (
    <div className="App">
      <header>
        <h1>Tìm kiếm</h1>
        <button className="search-button" onClick={handleSearchClick}>
          <RiSearchLine />
          <span>検索</span>
        </button>
      </header>

      {isPopupOpen && (
        <div id="search-popup">
          <h2>検索</h2>
          <button className="close-button" onClick={handlePopupClose}>
            <RiCloseLine />
          </button>
          <form onSubmit={handleSearchSubmit}>
            <label htmlFor="cafe-name">Tên quán cà phê:</label>
            <input type="text" id="cafe-name" value={cafeName} onChange={(e) => setCafeName(e.target.value)} />

            <label htmlFor="area">Khu vực:</label>
            <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="all">Tất cả</option>
              <option value="A">Hai Ba Trung</option>
              <option value="B">Dong Da</option>
              <option value="C">Hoan Kiem</option>
            </select>

            <div className="input-container">
            <label htmlFor="has-ac">Có máy điều hòa:</label>
            
            <label htmlFor="status">Trạng thái:</label>
            </div>

            <div className="input-container">
            <input type="checkbox" id="has-ac" checked={hasAC} onChange={(e) => setHasAC(e.target.checked)} />
            
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">Tất cả</option>
              <option value="open">Đang mở cửa</option>
            </select>
            </div>

            <button type="submit">Tìm kiếm</button>
            <button type="button" onClick={handlePopupClose}>Đóng</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
