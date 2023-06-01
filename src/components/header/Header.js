import React from 'react'
import './header.css'
const Header = () => {
  return (
    <header className='header'>
      <div className="wrap">
        <div className="header-logo">
          <div className="image">
            <img src="	https://www.pngmart.com/files/1/Coffee-Logo-Transparent-Background.png" alt="" />
          </div>
          <div className="name">
            KISSATEN
          </div>
        </div>
        <div className="header-search">
          <div className="form-input">
            <input type="text" placeholder='検索' />
            <button className='btn'><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div className="header-login">
          <button className='btn'><i class="fa-solid fa-user"></i> DMQ</button>
        </div>
      </div>
    </header>
  )
}

export default Header