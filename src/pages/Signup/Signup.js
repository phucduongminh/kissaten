import React, {useState} from 'react'
import './Signup.css'

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [gmail, setGmail] = useState('');

  const signupClick = async () => {
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
        //setMessage("Shop added successfully");
        console.log("Review added successfully");
      } else {
      }
    } catch (error) {
      //setMessage("Error");
      console.error(error);
    }
  };

  return (
    <section className='signup'>
      <div className="wrap">
        <div className="signup-image">
          <img src="https://rare-gallery.com/uploads/posts/577884-coffee-4k-wallpaper.jpg" alt="" />
        </div>
        <div className="signup-form">
          <div className="heading">
            <div className="image">
              <img src="https://www.pngmart.com/files/1/Coffee-Logo-Transparent-Background.png" alt="" srcset="" />
            </div>
            <h3>サインアップ</h3>
          </div>
          <div className="form-group">
            <div className="title">Tên đăng nhập</div>
            <input type="text" value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
          </div>
          <div className="form-group">
            <div className="title">Mật khẩu</div>
            <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form-group">
            <div className="title">Email</div>
            <input type="email" value={gmail}
                    onChange={(e) => setGmail(e.target.value)}/>
          </div>
          <button onClick={signupClick}>サインアップ</button>
          <a href="!">Đã có tài khoản, Login</a>
        </div>
      </div>
    </section>
  )
}

export default Signup