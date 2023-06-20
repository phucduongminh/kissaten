import React, {useState, useEffect} from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Bookmark from '../../components/Bookmark/bookmark'
import axios from 'axios';
import Showrating from '../../components/Rating/showrating';
import { useParams } from "react-router-dom";

const Home = () => {
  const { username } = useParams();

  /*const [uid,setUid] = useState();

  useEffect(() => {
    const axiosGetUserId = async () => {
    const response = await axios.post(`/api/User/${username}/getUserIdByUserName`);
    const id = await response.id;
    setUid(id);}
    axiosGetUserId();
    }, [username]);*/

  const [shop,setShop]= useState([]);
  useEffect(() => {
    const axiosGetshop = async () => {
    const response = await axios.post(`https://localhost:7263/api/CoffeeShop/SortCoffeeShopSortBy/All`);
    const data = await response.data;
    setShop(data);}
    axiosGetshop();
    }, []);
  const [bookmarkedItemIds, setBookmarkedItemIds] = useState([]);

  const handleBookmarkClick = (itemId) => {
    if (bookmarkedItemIds.includes(itemId)) {
      setBookmarkedItemIds(bookmarkedItemIds.filter((id) => id !== itemId)); // Remove item from bookmarkedItemIds if already bookmarked
    } else {
      setBookmarkedItemIds([...bookmarkedItemIds, itemId]); // Add item to bookmarkedItemIds
    }
  };

  const navigate = useNavigate()
  
  return (
    <section className='home'>
      <div className="wrap">
        <div className="home-heading">
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
        <div className="home-list">
        {shop.map((item, index) => {
            return (
              <div
                className="home-item"
                key={index}
                onClick={() => navigate(`/inforshop/${item.id}/${username}`)}
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
                <Bookmark isBookmarked={bookmarkedItemIds.includes(item.id)}
          handleBookmarkClick={handleBookmarkClick} itemId={item.id} />
              </div>
            );
          })}
        </div>
        <div className="home-pagination">
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

export default Home