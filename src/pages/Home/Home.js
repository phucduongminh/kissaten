import React from 'react'
import './home.css'
const Home = () => {
  return (
    <section className='home'>
      <div className="wrap">
        <div className="home-heading">
          <h2 className="title">ホームページ</h2>
          <div className="filter">
            <label htmlFor="">Sort by</label>
            <select name="" id="">
              <option value="">AAAAAAA</option>
              <option value="">AAAAAAAAAA</option>
              <option value="">AAAAAAAAAAAAA</option>
            </select>
          </div>
        </div>
        <div className="home-list">
          <div className="home-item">
            <div className="image">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
            </div>
            <div className="content">
              <div className="name">Name</div>
              <div className="rating">
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
              </div>
              <div className="description">
                <i class="fa-solid fa-location-dot"></i>
                 &nbsp;155 Cầu Giấy
              </div>
              <div className="description">
                <i class="fa-solid fa-clock"></i>155 Cầu Giấy
              </div>
            </div>
            <div className='icon'>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
          <div className="home-item">
            <div className="image">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
            </div>
            <div className="content">
              <div className="name">Name</div>
              <div className="rating">
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
              </div>
              <div className="description">
                <i class="fa-solid fa-location-dot"></i>
                 &nbsp;155 Cầu Giấy
              </div>
              <div className="description">
                <i class="fa-solid fa-clock"></i>155 Cầu Giấy
              </div>
            </div>
            <div className='icon'>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
          <div className="home-item">
            <div className="image">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
            </div>
            <div className="content">
              <div className="name">Name</div>
              <div className="rating">
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
              </div>
              <div className="description">
                <i class="fa-solid fa-location-dot"></i>
                 &nbsp;155 Cầu Giấy
              </div>
              <div className="description">
                <i class="fa-solid fa-clock"></i>155 Cầu Giấy
              </div>
            </div>
            <div className='icon'>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
          <div className="home-item">
            <div className="image">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
            </div>
            <div className="content">
              <div className="name">Name</div>
              <div className="rating">
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
              </div>
              <div className="description">
                <i class="fa-solid fa-location-dot"></i>
                 &nbsp;155 Cầu Giấy
              </div>
              <div className="description">
                <i class="fa-solid fa-clock"></i>155 Cầu Giấy
              </div>
            </div>
            <div className='icon'>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
        <div className="home-pagination">
          <a className='page' href="">
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <a className='page' href="">
            1
          </a>
          <a className='page' href="">
            2
          </a>
          <a className='page' href="">
            3
          </a>
          <a className='page' href="">
            <i class="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home