import React, { useState } from 'react';
import './search.css';
import { RiSearchLine, RiCloseLine } from 'react-icons/ri';

function Search() {
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
        <h1>Tìm kiếm quán cà phê</h1>
        <button className="search-button" onClick={handleSearchClick}>
          <RiSearchLine />
          <span>Tìm kiếm</span>
        </button>
      </header>

      {isPopupOpen && (
        <div className="search-popup">
          <div className="popup-content">
            <h2>検索</h2>
            <button className="close-button" onClick={handlePopupClose}>
              <RiCloseLine />
            </button>
            <form onSubmit={handleSearchSubmit}>
              <div className="form-group">
                <label htmlFor="cafe-name">喫茶店の名:</label>
                <input type="text" id="cafe-name" value={cafeName} onChange={(e) => setCafeName(e.target.value)}/>
              </div>

              <div className="form-group">
                <label htmlFor="area">検索エリア:</label>
                <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
                  <option value="all">全部</option>
                  <option value="A">Hai Bà Trưng</option>
                  <option value="B">Đống Đa</option>
                  <option value="C">Hoàn Kiếm</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="has-ac">エアコン:</label>
                <input type="checkbox" className="checkbox-1" id="has-ac" checked={hasAC} onChange={(e) => setHasAC(e.target.checked)} />
              </div>

              <div className="form-group">
                <label htmlFor="status">営業時間:</label>
                <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="all">全部</option>
                  <option value="open">開いている</option>
                </select>
              </div>

              <div className="button-group">
                <button type="submit">検索</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
