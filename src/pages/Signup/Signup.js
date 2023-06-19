import React, {useState} from 'react'
import Alert from '@mui/material/Alert';
import './Signup.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [gmail, setGmail] = useState('');
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  const signupClick = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://localhost:7263/api/User/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },

          body: JSON.stringify({
            userName: userName,
            password: password,
            gmail: gmail
          }),
        }
      );
      if (response.status === 200) {
        navigate(`/login`);
        console.log("signup added successfully");
      } else {
      }
    } catch (error) {
      setMessage(true);
      console.error(error);
    }
  };

  return (
    <section className="signup">
      <div className="wrap">
        <div className="signup-image">
          <img
            src="https://rare-gallery.com/uploads/posts/577884-coffee-4k-wallpaper.jpg"
            alt=""
          />
        </div>
        <div className="signup-form">
          <div className="heading">
            <div className="image">
              <img
                src="https://www.pngmart.com/files/1/Coffee-Logo-Transparent-Background.png"
                alt=""
                srcset=""
              />
            </div>
            <h3>サインアップ</h3>
          </div>
          <form onSubmit={signupClick}>
            <div className="form-group">
              <div className="title">Tên đăng nhập</div>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <div className="title">Mật khẩu</div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <div className="title">Email</div>
              <input
                type="email"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" value="Submit">
                サインアップ
              </button>
              <a href="/login">Đã có tài khoản, Login</a>
            </div>
          </form>
          {message?
              <Alert variant="outlined" severity="error">
                This is an error alert — check it out!
              </Alert>: null}
        </div>
      </div>
    </section>
  );
}

export default Signup