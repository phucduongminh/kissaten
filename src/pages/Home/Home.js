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
              <option value="">平均評価</option>
              <option value="">人気がある </option>
            </select>
          </div>
        </div>
        <div className="home-list">
          <div className="home-item" type="button" outline onClick={routeChange}>
            <div className="image">
              <img src="https://lh5.googleusercontent.com/p/AF1QipM6Y7VGs0t3uOf6XQH2cT1uv6WMKFdp9nl1uaLG=w143-h143-n-k-no" alt="" />
            </div>
            <div className="content">
              <div className="name">The Coffee House</div>
              <div className="rating">
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
              </div>
              <div className="description">
                <i class="fa-solid fa-location-dot"></i>
                 &nbsp;122 P. Bùi Thị Xuân
              </div>
              <div className="description">
                <i class="fa-solid fa-clock"></i>8:00 - 20:00
              </div>
            </div>
            <div className='icon'>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
          <div className="home-item">
            <div className="image">
              <img src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className="content">
              <div className="name">Me Coffee Roasters</div>
              <div className="rating">
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
              </div>
              <div className="description">
                <i class="fa-solid fa-location-dot"></i>
                 &nbsp;3B Ng. Phan Huy Chú
              </div>
              <div className="description">
                <i class="fa-solid fa-clock"></i>8:00 - 23:00
              </div>
            </div>
            <div className='icon'>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
          <div className="home-item">
            <div className="image">
              <img src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className="content">
              <div className="name">THE WISELANDS Coffee</div>
              <div className="rating">
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
              </div>
              <div className="description">
                <i class="fa-solid fa-location-dot"></i>
                 &nbsp;17 Xóm Hà Hồi
              </div>
              <div className="description">
                <i class="fa-solid fa-clock"></i>8:00 - 20:00
              </div>
            </div>
            <div className='icon'>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
          <div className="home-item">
            <div className="image">
              <img src="https://lh5.googleusercontent.com/p/AF1QipOa8NSpTloO0SipAVakZ4JJcL_6tHCfPRB2WXIZ=w143-h143-n-k-no" alt="" />
            </div>
            <div className="content">
              <div className="name">L’U Cofee & tea</div>
              <div className="rating">
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
                <i class="fa-solid fa-star fill"></i>
              </div>
              <div className="description">
                <i class="fa-solid fa-location-dot"></i>
                 &nbsp;101 Ng. 48 P. Tạ Quang Bửu
              </div>
              <div className="description">
                <i class="fa-solid fa-clock"></i>8:00 - 22:00
              </div>
            </div>
            <div className='icon'>
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
        <div className="home-pagination">
          <a className='page' href="!">
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <a className='page' href="!">
            1
          </a>
          <a className='page' href="!">
            2
          </a>
          <a className='page' href="!">
            3
          </a>
          <a className='page' href="!">
            <i class="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home