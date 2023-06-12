import React, { useState } from 'react';
//import axios from 'axios';
import './header.css'

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [cafeName, setCafeName] = useState('');
  const [area, setArea] = useState('all');
  const [hasAC, setHasAC] = useState(false);
  const [status, setStatus] = useState('all');
  const [message, setMessage] = useState("");

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

  const handleSearchClick1 = () => {
    setPopupOpen1(true);
  };

  const handlePopupClose1 = () => {
    setPopupOpen1(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageCover(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const [isPopupOpen1, setPopupOpen1] = useState(false);
  const [imageCover, setImageCover] = useState(null);
  const [name, setName] = useState('');
  const [openHour, setOpenHour] = useState('');
  const [closeHour, setCloseHour] = useState('');
  const [description, setDescription] = useState('');
  const [service, setService] = useState('');
  const [address, setAddress] = useState('');
  //const boolservice = Boolean(service);
  const boolservice = (service.toLowerCase() === "true");

  const handleAddSubmit = async () => {
    try {
      const response = await fetch("https://localhost:7263/api/CoffeeShop/AddCoffeeShop", {
  method: 'POST',
  headers: {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Access-Control-Allow-Origin':'*'},
  
  body: JSON.stringify({
    "id": 7,
    "name": name,
    "address": address,
    "gmail": "",
    "contactNumber": 0,
    "imageCover": imageCover,
    "averageRating": 0,
    "openHour": "2023-06-12T16:11:07.153Z",
    "closeHour": "2023-06-12T16:11:07.153Z",
    "service": boolservice,
    "description": description,
    "status": "",
    "postedByUser": 0,
    "approved": 0
  })
});
if (response.status === 200) {
    setMessage("Shop added successfully");
    console.log("Shop added successfully");
} else {

}
}  catch (error) {
  setMessage("Error");
  console.error(error);
}
};

  /*const handleAddSubmit = async () => {
    try {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos/1',
            {
              id: '3',
              name: 'name',
              openHour: '2023-06-09T09:48:16.054Z',
              closeHour: '2023-06-09T09:48:16.054Z',
              imageCover: 'imageCover',
              description: 'description',
              address: 'address',
              service: true
            }
        );
        if (response.status === 200) {
            setMessage("Shop added successfully");
            console.log("Shop added successfully");
        } else {

        }
        // Xử lý phản hồi từ backend (nếu cần)
    } catch (error) {
        // Xử lý lỗi (nếu có)
        setMessage("Error");
        console.error(error);
    }
  };*/

  /*const id =1;
  const user={id,name,openHour,closeHour,description,address,service,imageCover};

const handleAddSubmit = async () => {
    try {

        const response = await axios.post(
            'api/CoffeeShop/AddCoffeeShop',
            user,
        );
        if (response.status === 200) {
            setMessage("Shop added successfully");
            console.log("Shop added successfully");
        } else {

        }
        // Xử lý phản hồi từ backend (nếu cần)
    } catch (error) {
        // Xử lý lỗi (nếu có)
        console.error(error);
    }
  };*/

  return (
    <header className='header'>
      <div className="wrap">
        <div className="header-logo">
          <div className="image">
            <img src="	https://www.pngmart.com/files/1/Coffee-Logo-Transparent-Background.png" alt="" />
          </div>
          <div className="name">
            KISSATEN
          </div>
        </div>
        <div className="header-search">
          <div className="form-input">
            <input type="text" placeholder='検索' />
            <button className='btn' onClick={handleSearchClick}><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div className="header-login">
          <button className='btn'><i class="fa-solid fa-user"></i> DMQ</button>
        </div>
        <div className="header-add">
          <button className='btn' onClick={handleSearchClick1}><i class="fa-solid fa-plus"> 喫茶店</i></button>
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
                <input type="text" id="cafe-name" value={cafeName} onChange={(e) => setCafeName(e.target.value)} required/>
              </div>

              <div className="form-group">
                <label htmlFor="area">検索エリア:</label>
                <select id="area" value={area} onChange={(e) => setArea(e.target.value)} required>
                  <option value="all">全部</option>
                  <option value="A">Hai Bà Trưng</option>
                  <option value="B">Đống Đa</option>
                  <option value="C">Hoàn Kiếm</option>
                </select>
              </div>

              <div class="left-section">
              <li>
                <label >営業時間:</label>
              <section>
                <input type="radio" class="form-check-input"  id="status1" value="open" check={status} onChange={(e) => setStatus(e.target.value)} />
                  <p class="form-check-label" htmlFor="status1">
                    開いている
                  </p>
              </section>
              <section>
                <input type="radio" class="form-check-input" id="status2" value="all" check={status} onChange={(e) => setStatus(e.target.value)} />
                  <p class="form-check-label" htmlFor="status2">
                    すべて
                  </p>
              </section>
              </li>
              </div>

              <div class="right-section">
              <li>
              <label >サービス:</label>
              <section>
                <input type="checkbox" className="checkbox" id="has-ac" checked={hasAC} onChange={(e) => setHasAC(e.target.checked)} />
                <p className="checkbox-label" htmlFor="has-ac">エアコン</p>
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

      {isPopupOpen1 && (
        <div className="search-popup">
          <div className="popup-content">
            <h2>喫茶店追加</h2>
            <form >
              <button className="close-button" onClick={handlePopupClose1}>
                <i class="fa-sharp fa-solid fa-xmark"></i>
              </button>
              <div className="left-section1">
                <div className="form-group">
                  <label htmlFor="name">喫茶店名:</label>
                  <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group time">
                  <label htmlFor="opening-time">開館時間:</label>
                  <select id="opening-time" name="opening-time" required value={openHour} onChange={(e) => setOpenHour(e.target.value)}>
                    <option value="">開館時間</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                  </select>
                </div>
                <div className="form-group time">
                  <label htmlFor="closing-time">閉館時間:</label>
                  <select id="closing-time" name="closing-time" required value={closeHour} onChange={(e) => setCloseHour(e.target.value)}>
                    <option value="">閉館時間</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="description-label" htmlFor="description">紹介:</label>
                  <textarea id="description" name="description" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
              </div>
              <div className="right-section1">
                <div className="form-group">
                  <label htmlFor="service">サービス:</label>
                  <select id="service" name="service" required value={service} onChange={(e) => setService(e.target.value)}>
                    <option value="">サービス</option>
                    <option value="true">エアコンがある</option>
                    <option value="false">エアコンがない</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="address">アドレス:</label>
                  <input type="text" id="address" name="address" required value={address} onChange={(e) => setAddress(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label htmlFor="image">イメージ:</label>
                </div>
                <div className="square form-group">
                  {imageCover ? (
                    <div className="image-square">
                      <img src={imageCover} alt="Uploaded" className="image" />
                    </div>
                  ) : (
                    <label htmlFor="image-upload" className="upload-label">
                      <div className="plus">+</div>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="file-input"
                      />
                    </label>
                  )}
                </div>
                
                <button className="add-button" type="submit" onClick={handleAddSubmit} >追加</button>
              </div>
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header