import React from 'react'
import './bookmark.css'

const Bookmark = () => {
  return (
    <section className='bookmark'>
      <div className="wrap">
        <h2 className='bookmark-title'>
          Title
        </h2>
        <div className="bookmark-content">
          <div className="bookmark-filter">
            <div className="box">
              <p className="title">Filter</p>
              <i class="fa-solid fa-filter"></i>
            </div>
            <div className="filter">
              <div className="title">Filter</div>
              <div className="form-control">
                <input id='row-1' type="radio" name='radio-1' defaultChecked />
                <label htmlFor="row-1"></label>
                <p className="text">filter text</p>
              </div>
              <div className="form-control">
                <input id='row-2' type="radio" name='radio-1' />
                <label htmlFor="row-2"></label>
                <p className="text">filter text</p>
              </div>
            </div>
            <div className="filter">
              <div className="title">Filter</div>
              <div className="form-control">
                <input id='row-3' type="radio" name='radio-2' defaultChecked />
                <label htmlFor="row-3"></label>
                <p className="text">filter text</p>
              </div>
              <div className="form-control">
                <input id='row-4' type="radio" name='radio-2' />
                <label htmlFor="row-4"></label>
                <p className="text">filter text</p>
              </div>
            </div>
          </div>
          <div className="bookmark-list">
            <div className="bookmark-item">
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
              <i class="fa-solid fa-bookmark fill"></i>
            </div>
            </div>
          </div>
        </div>
        <div className="bookmark-pagination">
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

export default Bookmark