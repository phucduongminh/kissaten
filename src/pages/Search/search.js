import React, { useState, useEffect } from 'react';
import './search.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Showrating from '../../components/Rating/showrating';

const Search = () => {
  const navigate = useNavigate()
  const [shopInfo, setShopInfo] = useState([]);
  const {cafeName,area,service,status,uid} = useParams();
  const booleanValue = Boolean(service);

  useEffect(() => {
    const search = { 
      name: cafeName,
      address: area,
      service: booleanValue,
      status: status};
    const axiosShopInfo = async () => {
    const response = await axios.post(`https://localhost:7263/api/CoffeeShop/SearchCoffeeShop`,JSON.stringify(search), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.data;
    setShopInfo(data);}
    axiosShopInfo();
    }, );
  return (
    <section className='search'>
      <div className="wrap">
        <div className="search-heading">
          <h2 className="title">検索結果</h2>
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
        {shopInfo.map((item, index) => {
            return (
              <div
                className="prehome-item"
                key={index}
                onClick={() => navigate(`/inforshop/${item.id}/${uid}`)}
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
        <div className="search-pagination">
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

export default Search