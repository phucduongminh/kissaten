import React, { useState } from 'react';
//import axios from 'axios';
import './Preheader.css'

const Preheader = () => {
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
    <header className="header">
      <div className="wrap">
        <div className="header-logo">
          <div className="image">
            <img
              src="	https://www.pngmart.com/files/1/Coffee-Logo-Transparent-Background.png"
              alt=""
            />
          </div>
          <div className="name">KISSATEN</div>
        </div>
        <div className="header-search">
          <div className="form-input">
            <input type="text" placeholder="検索" />
            <button className="btn" onClick={handleSearchClick}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="header-login">
          <button className="btn">
            <i class="fa-solid fa-user"></i> ログイン
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <div className="search-popup">
          <div className="popup-content">
            <h2>検索</h2>
            <button className="close-button" onClick={handlePopupClose}>
              <i class="fa-sharp fa-solid fa-xmark"></i>
            </button>
            <form onSubmit={handleSearchSubmit}>
              <div className="form-group">
                <label htmlFor="cafe-name">喫茶店の名:</label>
                <input
                  type="text"
                  id="cafe-name"
                  value={cafeName}
                  onChange={(e) => setCafeName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="area">検索エリア:</label>
                <select
                  id="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                >
                  <option value="all">全部</option>
                  <option value="A">Hai Bà Trưng</option>
                  <option value="B">Đống Đa</option>
                  <option value="C">Hoàn Kiếm</option>
                </select>
              </div>

              <div class="left-section">
                <li>
                  <label>営業時間:</label>
                  <section>
                    <input
                      type="radio"
                      class="form-check-input"
                      name="status"
                      id="status1"
                      value="open"
                      checked={status === "開いている"}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label class="form-check-label" htmlFor="status1">
                      開いている
                    </label>
                  </section>
                  <section>
                    <input
                      type="radio"
                      class="form-check-input"
                      name="status"
                      id="status2"
                      value="all"
                      checked={status === "all"}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label class="form-check-label" htmlFor="status2">
                      すべて
                    </label>
                  </section>
                </li>
              </div>

              <div class="right-section">
                <li>
                  <label>サービス:</label>
                  <section>
                    <input
                      type="checkbox"
                      className="checkbox"
                      id="has-ac"
                      checked={hasAC}
                      onChange={(e) => setHasAC(e.target.checked)}
                    />
                    <label className="checkbox-label" htmlFor="has-ac">
                      エアコン
                    </label>
                  </section>
                </li>
              </div>

              <div className="button-group">
                <button type="submit">検索</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Preheader