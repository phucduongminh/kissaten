import React, { useState, useEffect } from 'react';
import './inforShop.css';

import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import axios from 'axios';
import Showrating from '../../components/Rating/showrating';
import RatingStar from '../../components/Rating/ratingstar';
import UpdateStore from '../../components/Update/updateStore';

const InforShop = () => {
  const [shopInfo, setShopInfo] = useState(null);
  const [review, setReview] = useState([]);
  const [isDetailMode, setChange] = useState(true)
  const { id, uid } = useParams();
  const numberId = parseInt(id);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const user = useSelector((state) => state.login.user);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupOpen1, setShowPopup1] = useState(false);

  const handleEditClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };
  
  useEffect(() => {
  const axiosShopInfo = async () => {
  const response = await axios.post(`https://localhost:7263/api/CoffeeShop/GetInfoCoffeeShop/${numberId}`);
  const data = await response.data;
  setShopInfo(data);}
  axiosShopInfo();
  }, [numberId]);

  useEffect(() => {
    const axiosReview = async () => {
    const response = await axios.get(`https://localhost:7263/api/Review/getReviewCoffeeShop/${numberId}`);
    const data = await response.data;
    setReview(data);}
    axiosReview();
    }, [numberId]);

  if (!shopInfo) {
    return <div>Loading...</div>;
  }

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleAddReview = async () => {
    try {
      const response = await fetch(
        "https://localhost:7263/api/Review/addReviewCoffeeShop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },

          body: JSON.stringify({
            userId: uid,
            coffeeId: numberId,
            rating: rating,
            comment: comment,
            reviewAt: "",
            editAt: ""
          }),
        }
      );
      if (response.status === 200) {
        //setMessage("Shop added successfully");
        console.log("Review added successfully");
        window.location.reload();
      } else {
      }
    } catch (error) {
      //setMessage("Error");
      console.error(error);
    }
  };

  return (
    <section className="inforShop">
      <div className="wrap">
        {/* Truy cập và sử dụng thông tin quán cà phê trong shopInfo */}
        <div className="inforShop-left">
          <div className="image">
            <img src={shopInfo.imageCover} alt="" />
          </div>
          <div className="service">
            <h3 className="type">サービス</h3>
            <div className="buttons">
              {shopInfo.service === true ? (
                <button className="btn">エアコン</button>
              ) : (
                <button className="btn">エアコンがない</button>
              )}
            </div>
            <div className="title">
              <h4>状態</h4>
              {shopInfo.status === null ? (
                <button className="btn">開いている</button>
              ) : (
                <button className="btn">閉めた</button>
              )}
            </div>
            
            
              {user.username === 'admin' && (
                <div className="service">
                <h3>編集</h3>
                <div className="buttons">
                <button className="btn" style={{background: '#3EB489',marginRight:0}} onClick={handleEditClick}>情報を編集</button>
                <button className="btn" style={{background: 'red'}}>喫茶店消去</button>
                </div>
                </div>
              )}
          </div>
        </div>
        <div className="inforShop-right">
          <h2>{shopInfo.name}</h2>
          {/* Hiển thị rating */}
          <div className="rating">
            <Showrating rating={shopInfo.averageRating} />
          </div>
          <div className="buttons">
            {/* Đổi tên biến change thành isDetailMode để thể hiện chế độ hiển thị */}
            <button
              className={isDetailMode ? "btn active" : "btn"}
              onClick={() => setChange(true)}
            >
              ディテール
            </button>
            <button
              className={!isDetailMode ? "btn active" : "btn"}
              onClick={() => setChange(false)}
            >
              レビュー
            </button>
          </div>
          {/* Hiển thị thông tin quán hoặc nhận xét dựa trên chế độ */}
          {isDetailMode ? (
            <div className="list-info">
              <div className="info">
                <div className="title">アドレス</div>
                <p className="content">{shopInfo.address}</p>
              </div>
              <div className="info">
                <div className="title">営業時間</div>
                <p className="content">
                  {shopInfo.openHour}-{shopInfo.closeHour} 毎日
                </p>
              </div>
              <div className="info">
                <div className="title">詳細な情報</div>
                <p className="content">{shopInfo.description}</p>
              </div>
            </div>
          ) : (
            <div className="comments">
              <div className="list">
              {review.map((review, index) => (
                <div className="item" key={index}>
                  <div className="image">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <div className="top">
                      <div className="name">User {review.userId}</div>
                      <div className="status">
                        <div className="icon">
                          <span>(0)</span>{" "}
                          <i className="fa-solid fa-thumbs-up purple"></i>
                        </div>
                        <div className="icon">
                          <span>(0)</span>{" "}
                          <i className="fa-solid fa-thumbs-down red"></i>
                        </div>
                        <div className="icon">
                          <i className="fa-solid fa-trash red"></i>
                        </div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="rating">
                        <Showrating  rating={review.rating}/>
                      </div>
                      <div className="text">
                        {review.comment}
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              <div className="input-comment">
                <RatingStar value={rating} onClick={handleRatingChange} />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button className="btn" onClick={handleAddReview}>
                  発信
                </button>
              </div>
            </div>
          )}
        </div>
        {isPopupOpen && (<UpdateStore handlePopupClose={handlePopupClose}/>)}
      </div>
    </section>
  );
}

export default InforShop;
