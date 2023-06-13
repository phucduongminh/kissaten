import React, { useState, useEffect } from 'react';
import './inforShop.css';

import { useParams } from "react-router-dom";

import axios from 'axios';

const InforShop = () => {
  const [shopInfo, setShopInfo] = useState(null);
  const [isDetailMode, setChange] = useState(true)
  const { id } = useParams();
  /*const numberId = parseInt(id);

  useEffect(() => {
    const fetchShopInfo = async () => {
      const response = await fetch("https://localhost:7263/api/CoffeeShop/GetInfoCoffeeShop",{
        method: 'POST',
        headers: {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin':'*'},
        
        body: JSON.stringify({
          "id": 20,
        })
      });
      const data = await response.json();
      setShopInfo(data);
    };

    fetchShopInfo();
  }, []);*/
  useEffect(() => {
  const fetchShopInfo = async () => {
  const response = await axios.post("https://localhost:7263/api/CoffeeShop/GetInfoCoffeeShop/12");
  const data = await response.data;
  setShopInfo(data);}
  fetchShopInfo();
  }, []);

  if (!shopInfo) {
    return <div>Loading...</div>;
  }

  return (
    <section className="inforShop">
      <div className="wrap">
        {/* Truy cập và sử dụng thông tin quán cà phê trong shopInfo */}
        <div className="inforShop-left">
          <div className="image">
            <img src={shopInfo.image} alt="" />
          </div>
          <div className="service">
            <h3 className="type">サービス</h3>
            <div className="buttons">
              <button className='btn'>エアコン</button>
              <button className='btn'>デリバリー</button>
            </div>
            <div className="title">
              <h4>状態:</h4>
              <button className="btn">{shopInfo.status}</button>
            </div>
          </div>
        </div>
        <div className="inforShop-right">
          <h2>{shopInfo.name}</h2>
          {/* Hiển thị rating */}
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <i className="fa-solid fa-star" key={index}></i>
            ))}
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
              近鉄名古屋線 湯の山線 「近鉄四日市駅」 近くにあるカフェ、 「cafe neuf (カフェヌフ)」。        
              当店は、商店街のメイン スリートから一本中に入ったところにあります。 開放感の中に感じられるぬくもりに加え、
              カウンター中央に飾られる 季節の花や、店主が愛情込めてつくるカフェメニューが人気の秘密です。 ガラス張りの店内には、
              光がやわらかく 差し込みます。 ドリンクのお代わりが自由なモーニング。 お腹いっぱい食べたいランチタイム。 
              自分の時間を楽しむカ フェタイム。 お酒を片手に過ごすディナータイム。 朝から夜まで自由気ままに過ごせる、 使い勝手の良いカフェです。
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
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className='btn'>発信</button>
          </div>
         </div>  
         }
         
       </div>
     </div>
   </section>
 )
}

export default InforShop;
