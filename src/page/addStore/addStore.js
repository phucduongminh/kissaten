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
      <h1>喫茶店追加</h1>
      <form>

        <div class="left-section">
          <div class="form-group">
            <label for="name">喫茶店名:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group time">
            <label for="opening-time">開館時間:</label>
            <select id="opening-time" name="opening-time" required>
              <option value="">開館時間</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
            </select>
          </div>
          <div class="form-group time">
            <label for="closing-time">閉館時間:</label>
            <select id="closing-time" name="closing-time" required>
              <option value="">閉館時間</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
          <div class="form-group">
            <label class="description-label" for="description">紹介:</label>
            <textarea id="description" name="description" required></textarea>
          </div>
        </div>
        <div class="right-section">
          <div class="form-group">
            <label for="service">サービス:</label>
            <select id="service" name="service" required>
              <option value="">サービス</option>
              <option value="Dịch vụ A">サービス A</option>
              <option value="Dịch vụ B">サービス B</option>
              <option value="Dịch vụ C">サービス C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="address">アドレス:</label>
            <input type="text" id="address" name="address" required></input>
          </div>
          <div class="form-group">
            <label for="image">イメージ:</label>

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
          <button className="add-button">追加</button>

        </div>
      </form>

    </div>


  );
};

export default AddStore;
