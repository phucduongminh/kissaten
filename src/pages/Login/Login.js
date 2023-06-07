import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <section className='login'>
      <div className="wrap">
        <div className="login-image">
          <img src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" alt="" />
        </div>
        <div className="login-form">
          <div className="heading">
            <div className="image">
              <img src="https://static.vecteezy.com/system/resources/previews/008/131/223/original/simple-and-clean-restaurant-logo-template-design-in-brown-color-suitable-for-restaurants-cafe-shops-food-stalls-food-menus-etc-free-vector.jpg" alt="" srcset="" />
            </div>
            <h3>LOGIN</h3>
          </div>
          <div className="form-group">
            <div className="title">Tên đăng nhập</div>
            <input type="text" />
          </div>
          <div className="form-group">
            <div className="title">Tên đăng nhập</div>
            <input type="text" />
          </div>
          <button>BUTTON</button>
          <a href="">Link + Lorem ipsum dolor sit amet consectetur</a>
        </div>
      </div>
    </section>
  )
}

export default Login