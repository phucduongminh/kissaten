import React, { useState, useEffect } from 'react';
import './inforShop.css';

import { useParams } from "react-router-dom";

import axios from 'axios';
import Showrating from '../../components/Rating/showrating';
import RatingStar from '../../components/Rating/ratingstar';

const InforShop = () => {
  const [shopInfo, setShopInfo] = useState(null);
  const [isDetailMode, setChange] = useState(true)
  const { id } = useParams();
  const numberId = parseInt(id);
  const [rating, setRating] = useState(0);
  
  useEffect(() => {
  const axiosShopInfo = async () => {
  const response = await axios.post(`https://localhost:7263/api/CoffeeShop/GetInfoCoffeeShop/${numberId}`);
  const data = await response.data;
  setShopInfo(data);}
  axiosShopInfo();
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
        "https://localhost:7263/api/CoffeeShop/AddCoffeeShop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },

          body: JSON.stringify({
            id: 20,
            name: name,
            address: address,
            gmail: "",
            contactNumber: 0,
            imageCover: imageCover,
            averageRating: 0,
            openHour: "2023-06-12T16:11:07.153Z",
            closeHour: "2023-06-12T16:11:07.153Z",
            service: boolservice,
            description: description,
            status: "",
            postedByUser: 0,
            approved: 0,
          }),
        }
      );
      if (response.status === 200) {
        setMessage("Shop added successfully");
        console.log("Shop added successfully");
      } else {
      }
    } catch (error) {
      setMessage("Error");
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
              {shopInfo.service === true ? <button className='btn'>エアコン</button> : <button className='btn'>エアコンがない</button>}
            </div>
            <div className="title">
              <h4>状態:</h4>
              {shopInfo.status === null ? <button className="btn">開いている</button> : <button className="btn">閉めた</button>}
            </div>
          </div>
        </div>
        <div className="inforShop-right">
          <h2>{shopInfo.name}</h2>
          {/* Hiển thị rating */}
          <div className="rating">
            <Showrating rating={shopInfo.averageRating}/>
          </div>
          <div className="buttons">
            {/* Đổi tên biến change thành isDetailMode để thể hiện chế độ hiển thị */}
            <button
              className={isDetailMode ? 'btn active' : 'btn'}
              onClick={() => setChange(true)}
            >
              ディテール
            </button>
            <button
              className={!isDetailMode ? 'btn active' : 'btn'}
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
              <p className='content'>{shopInfo.address}</p>
            </div>
            <div className="info">
              <div className="title">営業時間</div>
              <p className='content'>{shopInfo.openHour}-{shopInfo.closeHour} 毎日</p>
            </div>
            <div className="info">
              <div className="title">詳細な情報</div>
              <p className='content'>
              {shopInfo.description}
              </p>
            </div>
            </div>
          ) : <div className="comments">
          <div className="list">
            <div className="item">
              <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
              </div>
              <div className="content">
                <div className="top">
                  <div className="name">Le Trung Kien</div>
                  <div className="status">
                    <div className="icon">
                      <span>(1)</span> <i class="fa-solid fa-thumbs-up purple"></i>
                    </div>
                    <div className="icon">
                      <span>(1)</span> <i class="fa-solid fa-thumbs-down red"></i>
                    </div>
                    <div className="icon">
                    <i class="fa-solid fa-trash red"></i>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="text">素晴らしい！！本当にきれい！！</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
              </div>
              <div className="content">
                <div className="top">
                  <div className="name">Dang Dinh Minh</div>
                  <div className="status">
                    <div className="icon">
                      <span>(1)</span> <i class="fa-solid fa-thumbs-up purple"></i>
                    </div>
                    <div className="icon">
                      <span>(1)</span> <i class="fa-solid fa-thumbs-down red"></i>
                    </div>
                    <div className="icon">
                    <i class="fa-solid fa-trash red"></i>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="text">サービスがとてもいいと思いますね！！！</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
              </div>
              <div className="content">
                <div className="top">
                  <div className="name">Pham Thanh Nam</div>
                  <div className="status">
                    <div className="icon">
                      <span>(1)</span> <i class="fa-solid fa-thumbs-up purple"></i>
                    </div>
                    <div className="icon">
                      <span>(1)</span> <i class="fa-solid fa-thumbs-down red"></i>
                    </div>
                    <div className="icon">
                    <i class="fa-solid fa-trash red"></i>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="text">この喫茶店の価格は本当に合理的なです。</div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-comment">
            <RatingStar value={rating} onClick={handleRatingChange} />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className='btn' onClick={handleAddReview}>発信</button>
          </div>
         </div>  
         }
         
       </div>
     </div>
   </section>
 )
}

export default InforShop;
