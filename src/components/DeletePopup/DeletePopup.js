import React, { useState } from 'react';

const DeletePopup = ({ onDelete, onClose }) => {
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <h3>Bạn chắc chắn muốn xóa quán?</h3>
          <div className="popup-buttons">
            <button className="delete-button" onClick={onDelete}>
              Xóa
            </button>
            <button className="cancel-button" onClick={onClose}>
              Hủy
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default DeletePopup;