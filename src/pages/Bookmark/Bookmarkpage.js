import React, {useState, useEffect} from 'react'
import './bookmark.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Showrating from '../../components/Rating/showrating';
import { useSelector } from 'react-redux';

const Bookmarkpage = () => {
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();

  const [shop,setShop]= useState([]);
  useEffect(() => {
    const axiosGetshop = async () => {
    const response = await axios.post(`https://localhost:7263/api/BookMark/${user.uid}/getListBookMark`);
    const data = await response.data;
    setShop(data);}
    axiosGetshop();
    }, [user.uid]);
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
              <i className="fa-solid fa-filter"></i>
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
            {shop.map((item, index) => {
            return (
              <div
                className="home-item"
                key={index}
                onClick={() => navigate(`/inforshop/${item.id}/${user.uid}`)}
              >
                <div className="image">
                  <img src={item.imageCover} alt="" />
                </div>
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="rating">
                    <Showrating rating={item.averageRating} />
                  </div>
                  <div className="description">
                    <i className="fa-solid fa-location-dot"></i>
                    {item.address}
                  </div>
                  <div className="description">
                    <i className="fa-solid fa-clock"></i>
                    {item.openHour}-{item.closeHour} 毎日
                  </div>
                </div>
                <div className="icon">
                <i
                  className="fa-solid fa-bookmark fa-shake fa-xl"
                  style={{ color: "#fad000" }}
                ></i></div>
              </div>
            );
          })}
          </div>
        </div>
        <div className="bookmark-pagination">
          <a className='page' href="!">
            <i className="fa-solid fa-chevron-left"></i>
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
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Bookmarkpage