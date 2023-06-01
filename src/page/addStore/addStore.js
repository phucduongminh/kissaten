import React, { useState } from 'react';
import './addStore.css';


const AddStore = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (

    <div class="container">
      <h1>Thêm quán</h1>
      <form>

        <div class="left-section">
          <div class="form-group">
            <label for="name">Tên quán:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group time">
            <label for="opening-time">Giờ mở:</label>
            <select id="opening-time" name="opening-time" required>
              <option value="">Chọn giờ mở</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
            </select>
          </div>
          <div class="form-group time">
            <label for="closing-time">Giờ đóng:</label>
            <select id="closing-time" name="closing-time" required>
              <option value="">Chọn giờ đóng</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
          <div class="form-group">
            <label class="description-label" for="description">Giới thiệu:</label>
            <textarea id="description" name="description" required></textarea>
          </div>
        </div>
        <div class="right-section">
          <div class="form-group">
            <label for="service">Dịch vụ:</label>
            <select id="service" name="service" required>
              <option value="">Chọn dịch vụ</option>
              <option value="Dịch vụ A">Dịch vụ A</option>
              <option value="Dịch vụ B">Dịch vụ B</option>
              <option value="Dịch vụ C">Dịch vụ C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="address">Địa chỉ:</label>
            <input type="text" id="address" name="address" required></input>
          </div>
          <div class="form-group">
            <label for="image">Hình ảnh:</label>

          </div>
          <div className="square form-group">

            {imageUrl ? (
              <div className="image-square">
                <img src={imageUrl} alt="Uploaded Image" className="image" />
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
          <button className="add-button">Thêm</button>

        </div>
      </form>

    </div>


  );
};

export default AddStore;
