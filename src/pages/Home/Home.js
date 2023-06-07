import React from 'react'
import './home.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/infor+id`; 
    navigate(path);
  }
  return (
    <section className='home'>
      <div className="wrap">
        <div className="home-heading">
          <h2 className="title">ホームページ</h2>
          <div className="filter">
            <label htmlFor="">Sort by</label>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
        </div>
        <div className="home-list">
          <div className="home-item" type="button" outline onClick={routeChange}>
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