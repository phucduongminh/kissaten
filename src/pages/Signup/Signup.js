import React from 'react'
import './Signup.css'

const Signup = () => {
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
            <h3>LOGIN</h3>
          </div>
          <div className="form-group">
            <div className="title">Tên đăng nhập</div>
            <input type="text" />
          </div>
          <div className="form-group">
            <div className="title">Mật khẩu</div>
            <input type="password" />
          </div>
          <div className="form-group">
            <div className="title">Email</div>
            <input type="email" />
          </div>
          <button>BUTTON</button>
          <a href="!">Link + Lorem ipsum dolor sit amet consectetur</a>
        </div>
      </div>
    </section>
  )
}

export default Signup