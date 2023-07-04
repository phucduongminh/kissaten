import React, { useState } from 'react';
import './updateStore.css';


const UpdateStore = ({handlePopupClose}) => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const [productName, setProductName] = useState('Cộng cà phê'); // Giá trị ban đầu của tên sản phẩm

  const handleProductNameChange = (event) => {
    setProductName(event.target.value); // Cập nhật giá trị tên sản phẩm khi người dùng thay đổi ô input
  };


  const [description, setDescription] = useState('Đây là giới thiệu'); // Giá trị ban đầu của ô giới thiệu

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Cập nhật giá trị ô giới thiệu khi người dùng thay đổi ô input
  };


  const [address, setAddress] = useState('155 Cầu Giấy'); // Giá trị ban đầu của ô địa chỉ

  const handleAddressChange = (event) => {
    setAddress(event.target.value); // Cập nhật giá trị địa chỉ khi người dùng thay đổi ô input
  };

  const handleClick = (e) => {
    e.preventDefault(); // Ngăn chặn lan truyền sự kiện onclick
    handlePopupClose();
    //console.log(itemId);
  };

  return (
    <section className="updatePopup">
    <div className="update-popup">
          <div className="popup-content">
      <h2>Chỉnh sửa quán</h2>
      <form>
      <button className="close-button" onClick={handleClick}>
                <i className="fa-sharp fa-solid fa-xmark"></i>
              </button>
        <div className="left-section">
          <div className="form-group">
            <label htmlFor="name">Tên quán:</label>
            <input type="text" id="name" name="name" value={productName}
              onChange={handleProductNameChange} required />
          </div>
          <div className="form-group time">
            <label htmlFor="opening-time">Giờ mở:</label>
            <select id="opening-time" name="opening-time" required>
              <option value="">Chọn giờ mở</option>
              <option value="08:00">08:00</option>
              <option value="09:00" defaultValue>09:00</option>
              <option value="10:00">10:00</option>
            </select>
          </div>
          <div className="form-group time">
            <label htmlFor="closing-time">Giờ đóng:</label>
            <select id="closing-time" name="closing-time" required>
              <option value="">Chọn giờ đóng</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00" defaultValue>20:00</option>
            </select>
          </div>
          <div className="form-group">
            <label className="description-label" htmlFor="description">Giới thiệu:</label>
            <textarea id="description" name="description" value={description}
              onChange={handleDescriptionChange} required></textarea>
          </div>
        </div>
        <div className="right-section">
          <div className="form-group">
            <label htmlFor="service">Dịch vụ:</label>
            <select id="service" name="service" required>
              <option value="">Chọn dịch vụ</option>
              <option value="Dịch vụ A" defaultValue>Điều hoà</option>
              <option value="Dịch vụ B">Dịch vụ B</option>
              <option value="Dịch vụ C">Dịch vụ C</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address">Địa chỉ:</label>
            <input type="text" id="address" name="address" value={address}
              onChange={handleAddressChange} required></input>
          </div>
          <div className="form-group">
            <label htmlFor="image">Hình ảnh:</label>

          </div>
          <div className="square form-group">

            {imageUrl ? (
              <div className="image-square">
                <img src={imageUrl} alt="Uploaded" className="image" />
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
          <div className="form-group">
            <label htmlFor="status" id='status-label'>Tình trạng:</label>

            Quán đông<input type="checkbox" id="status" name="status"></input> 
          </div>
          
          

        </div>
        <button className="add-button">Update</button>

      </form>

    </div>
    </div>
    </section>

  );
};

export default UpdateStore;
