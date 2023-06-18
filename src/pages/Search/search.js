import React from 'react'
import './search.css'
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const navigate = useNavigate()
  const data = [
  ]
  return (
    <section className='search'>
      <div className="wrap">
        <div className="search-heading">
          <h2 className="title">ホームページ</h2>
          <div className="filter">
            <label htmlFor="">Sort by</label>
            <select name="" id="">
              <option value="">全部</option>
              <option value="1">平均評価</option>
              <option value="2">人気がある </option>
            </select>
          </div>
        </div>
        <div className="search-list">
        {data.map((item, index) => {
            return (
              <div
                className="search-item"
                key={index}
                onClick={() => navigate(`/inforshop/${item.id}`)}
              >
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
                    <i class="fa-solid fa-clock"></i>
                    {item.time}
                  </div>
                </div>
                <div className="icon">
                    <i class="fa-regular fa-bookmark"></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="search-pagination">
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

export default Search