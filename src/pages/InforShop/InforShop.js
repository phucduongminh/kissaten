import React, { useState } from 'react'
import './inforShop.css'
const InforShop = () => {
  const [change, setChange] = useState(true)
  
  return (
    <section className='inforShop'>
      <div className="wrap">
        <div className="inforShop-left">
          <div className="image">
            <img src="https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_Seine_Tour_Eiffel_2.jpg" alt="" />
          </div>
          <div className="service">
            <h3 className='type'>カテゴリー</h3>
            <div className="buttons">
              <button className='btn'>エアコン</button>
              <button className='btn'>デリバリー</button>
            </div>
            <div className="title">
              <h4>混雑状況: </h4>
              <button className='btn'>混雑した</button>
            </div>
          </div> 
        </div>
        <div className="inforShop-right">
          <h2>喫茶店名</h2>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="buttons">
            <button className={change ? "btn active" : "btn"} onClick={() => setChange(true)}>
              ディテール
            </button>
            <button className={!change ? "btn active" : "btn"} onClick={() => setChange(false)}>
              レビュー
            </button>
          </div>
          {change ? 
            <div className="list-info">
            <div className="info">
              <div className="title">アドレス</div>
              <p className='content'>22 Hoàn kiếm, Hà Nội</p>
            </div>
            <div className="info">
              <div className="title">営業時間</div>
              <p className='content'>8:00-22:00毎日</p>
            </div>
            <div className="info">
              <div className="title">詳細な情報</div>
              <p className='content'>
              近鉄名古屋線 湯の山線 「近鉄四日市駅」 近くにあるカフェ、 「cafe neuf (カフェヌフ)」。        
              当店は、商店街のメイン スリートから一本中に入ったところにあります。 開放感の中に感じられるぬくもりに加え、
              カウンター中央に飾られる 季節の花や、店主が愛情込めてつくるカフェメニューが人気の秘密です。 ガラス張りの店内には、
              光がやわらかく 差し込みます。 ドリンクのお代わりが自由なモーニング。 お腹いっぱい食べたいランチタイム。 
              自分の時間を楽しむカ フェタイム。 お酒を片手に過ごす　ディナータイム。 朝から夜まで自由気ままに過ごせる、 使い勝手の良いカフェです。
              </p>
            </div>
            </div>
            :
            
           <div className="comments">
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

export default InforShop