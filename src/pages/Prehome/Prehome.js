import React, {useState, useEffect} from 'react'
import './Prehome.css'
import axios from 'axios';
import Showrating from '../../components/Rating/showrating';

const Prehome = () => {
  const [shop,setShop]= useState([]);
  useEffect(() => {
    const axiosReview = async () => {
    const response = await axios.post(`https://localhost:7263/api/CoffeeShop/SortCoffeeShopSortBy/All`);
    const data = await response.data;
    setShop(data);}
    axiosReview();
    }, []);
  return (
    <section className='prehome'>
      <div className="wrap">
        <div className="prehome-heading">
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
        <div className="prehome-list">
        {shop.map((item, index) => {
            return (
              <div
                className="prehome-item"
                key={index}
              >
                <div className="image">
                  <img src={item.imageCover} alt="" />
                </div>
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="rating">
                    <Showrating  rating={item.averageRating}/>
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
              </div>
            );
          })}
        </div>
        <div className="prehome-pagination">
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

export default Prehome