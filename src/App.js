import React, { useState } from 'react';
import './App.css';

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
        <h1>Trang web tìm kiếm</h1>
        <div id="search-bar">
          <input type="text" placeholder="Nhập tên quán cà phê" value={cafeName} onChange={(e) => setCafeName(e.target.value)} />
          <button onClick={handleSearchClick}>Tìm kiếm</button>
        </div>
      </header>

      {isPopupOpen && (
        <div id="search-popup">
          <h2>Tìm kiếm</h2>
          <form onSubmit={handleSearchSubmit}>
            <label htmlFor="cafe-name">Tên quán cà phê:</label>
            <input type="text" id="cafe-name" value={cafeName} onChange={(e) => setCafeName(e.target.value)} />

            <label htmlFor="area">Khu vực:</label>
            <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="all">Tất cả</option>
              <option value="A">Khu vực A</option>
              <option value="B">Khu vực B</option>
              <option value="C">Khu vực C</option>
            </select>

            <label htmlFor="has-ac">Có máy điều hòa:</label>
            <input type="checkbox" id="has-ac" checked={hasAC} onChange={(e) => setHasAC(e.target.checked)} />

            <label htmlFor="status">Trạng thái:</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">Tất cả</option>
              <option value="open">Đang mở cửa</option>
            </select>

            <button type="submit">Tìm kiếm</button>
            <button type="button" onClick={handlePopupClose}>Đóng</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
