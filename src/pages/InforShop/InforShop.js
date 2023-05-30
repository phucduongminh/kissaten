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
            <h3 className='type'>Loại dịch vụ</h3>
            <div className="buttons">
              <button className='btn'>Điều hòa</button>
              <button className='btn'>Vận chuyển</button>
            </div>
            <div className="title">
              <h4>Text: </h4>
              <button className='btn'>Button</button>
            </div>
          </div> 
        </div>
        <div className="inforShop-right">
          <h2>Tên cửa hàng</h2>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="buttons">
            <button className={change ? "btn active" : "btn"} onClick={() => setChange(true)}>
              Chi tiết
            </button>
            <button className={!change ? "btn active" : "btn"} onClick={() => setChange(false)}>
              Đánh giá
            </button>
          </div>
          {change ? 
            <div className="list-info">
            <div className="info">
              <div className="title">Địa chỉ</div>
              <p className='content'>22 Hoàn kiếm, Hà Nội</p>
            </div>
            <div className="info">
              <div className="title">Thời gian mở cửa</div>
              <p className='content'>8AM-22PM</p>
            </div>
            <div className="info">
              <div className="title">Giới thiệu về quán</div>
              <p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sint dolor aliquid voluptate voluptatem fuga laboriosam aut labore aperiam nulla voluptatibus repudiandae facere minus qui, aspernatur cupiditate tenetur provident deleniti id facilis asperiores! Ipsum veritatis qui nobis dolore. Necessitatibus, rerum minima quae beatae dignissimos officia est dolor distinctio quod voluptas!</p>
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
                   <div className="name">Lê bảo anh</div>
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
                   <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, iste placeat culpa dicta cumque odit saepe earum distinctio a quaerat possimus harum eos asperiores? Eveniet molestiae modi praesentium dolor earum!</div>
                 </div>
               </div>
             </div>
             <div className="item">
               <div className="image">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
               </div>
               <div className="content">
                 <div className="top">
                   <div className="name">Lê bảo anh</div>
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
                   <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, iste placeat culpa dicta cumque odit saepe earum distinctio a quaerat possimus harum eos asperiores? Eveniet molestiae modi praesentium dolor earum!</div>
                 </div>
               </div>
             </div>
             <div className="item">
               <div className="image">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
               </div>
               <div className="content">
                 <div className="top">
                   <div className="name">Lê bảo anh</div>
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
                   <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, iste placeat culpa dicta cumque odit saepe earum distinctio a quaerat possimus harum eos asperiores? Eveniet molestiae modi praesentium dolor earum!</div>
                 </div>
               </div>
             </div>
           </div>
           <div className="input-comment">
             <textarea name="" id="" cols="30" rows="10"></textarea>
             <button className='btn'>Send</button>
           </div>
          </div>  
          }
          
        </div>
      </div>
    </section>
  )
}

export default InforShop