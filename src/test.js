import React, { useState } from 'react';

function ProductEditForm() {
  const [productName, setProductName] = useState('Tên sản phẩm mẫu'); // Giá trị ban đầu của tên sản phẩm

  const handleProductNameChange = (event) => {
    setProductName(event.target.value); // Cập nhật giá trị tên sản phẩm khi người dùng thay đổi ô input
  };

  return (
    <div>
      <label htmlFor="product_name">Tên sản phẩm:</label>
      <input
        type="text"
        id="product_name"
        name="product_name"
        value={productName}
        onChange={handleProductNameChange}
      />
    </div>
  );
}

export default ProductEditForm;
