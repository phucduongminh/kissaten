import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const data = [
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      name: 'Name 1',
      address: 'Address 1',
      time: 'Time 1',
      description: 'Description 1',
    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      name: 'Name 1',
      address: 'Address 1',
      time: 'Time 1',
      description: 'Description 1',
    },
    {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      name: 'Name 1',
      address: 'Address 1',
      time: 'Time 1',
      description: 'Description 1',
    },
    {
      id: 4,
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      name: 'Name 1',
      address: 'Address 1',
      time: 'Time 1',
      description: 'Description 1',
    },
  ]
  return (
    <section className='home'>
      <div className="wrap">
        <div className="home-heading">
          <h2 className="title">Title</h2>
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
          {data.map((item, index) => {
            return (
                <div className="home-item" key={index} onClick={() => navigate(`/inforshop/${item.id}`)}>
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="rating">
                    <i class="fa-solid fa-star fill"></i>
                    <i class="fa-solid fa-star fill"></i>
                    <i class="fa-solid fa-star fill"></i>
                    <i class="fa-solid fa-star fill"></i>
                    <i class="fa-solid fa-star fill"></i>
                  </div>
                  <div className="description">
                    <i class="fa-solid fa-location-dot"></i>
                      {item.address}
                  </div>
                  <div className="description">
                    <i class="fa-solid fa-clock"></i>{item.time}
                  </div>
                </div>
              </div>
            )
          })}
          {/* <div className="home-item">
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
            <div className="icon">
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
          </div> */}
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