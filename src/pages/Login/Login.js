import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './loginActions';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(`/`);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username, password, navigateToHome));
  };

  return (
    <section className='login'>
      <div className="wrap">
        <div className="login-image">
          <img src="https://rare-gallery.com/uploads/posts/577884-coffee-4k-wallpaper.jpg" alt="" />
        </div>
        <div className="login-form">
          <div className="heading">
            <div className="image">
              <img src="https://www.pngmart.com/files/1/Coffee-Logo-Transparent-Background.png" alt="" srcset="" />
            </div>
            <h3>ログイン</h3>
          </div>
          <div className="form-group">
            <div className="title">Tên đăng nhập</div>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group">
            <div className="title">Mật khẩu</div>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleSubmit}>ログイン</button>
          <a href="/signup">Nếu chưa có tài khoản, Signup</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
