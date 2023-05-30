import React from 'react'
import './header.css'
const Header = () => {
  return (
    <header className='header'>
      <div className="wrap">
        <div className="header-logo">
          <div className="image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="" />
          </div>
          <div className="name">
            KISSATEN
          </div>
        </div>
        <div className="header-search">
          <div className="form-input">
            <input type="text" placeholder='Search' />
            <button className='btn'><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div className="header-login">
          <button className='btn'><i class="fa-solid fa-user"></i> DMO</button>
        </div>
      </div>
    </header>
  )
}

export default Header