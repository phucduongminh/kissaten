import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../pages/Login/loginActions';
import './MenuDropdown.css'

const MenuDropdown = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Thực hiện logout
    // ...

    // Chuyển hướng đến trang login
    //navigate('/logout');
    dispatch(logout());
  };

  return (
    <div className="menu-dropdown">
      <button className="btn" onClick={handleMenuClick}>
        <i className="fa-solid fa-user"></i> <strong>{username}</strong>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li onClick={() => navigate('/bookmark')}>View Bookmark</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
