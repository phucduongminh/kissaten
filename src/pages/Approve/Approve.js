import React, { useState, useEffect } from "react";
import axios from "axios";
import Showrating from "../../components/Rating/showrating";
import { toast } from 'react-toastify';
import './approve.css'

const Approve = () => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    const axiosGetshop = async () => {
      const response = await axios.post(
        `https://localhost:7263/api/SubCoffeeShop/SortSubCoffeeShopSortBy/All`
      );
      const data = await response.data;
      setShop(data);
    };
    axiosGetshop();
  }, []);

  return (
    <section className="approve">
      <div className="wrap">
        <h2 className="approve-title">承認画面</h2>

          {shop.length > 0 ? (shop.map((item, index) => {
            const denyShop = (e) => {
              e.stopPropagation();
              const cancelShop = async () => {
                await axios.delete(`https://localhost:7263/api/SubCoffeeShop/DeleteSubCoffeeShop/${item.id}`);
              };
              cancelShop();
            };
            const approveShop = async (e) => {
              e.stopPropagation();
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
                      name: item.name,
                      address: item.address,
                      gmail: "string",
                      contactNumber: 0,
                      imageCover: item.imageCover,
                      averageRating: 0,
                      openHour: item.openHour,
                      closeHour: item.closeHour,
                      service: item.service,
                      description: item.description,
                      status: item.status,
                      postedByUser: 0,
                      approved: 0,
                    }),
                  }
                );
                if (response.status === 200) {
                  toast.success('喫茶店が承認しました。', {
                    autoClose: 2500, // Đóng sau 2 giây
                  });
                  console.log("Shop added successfully");
                  const cancelShop = async () => {
                    await axios.delete(`https://localhost:7263/api/SubCoffeeShop/DeleteSubCoffeeShop/${item.id}`);
                  };
                  cancelShop();
                } else {
                  toast.error('エラーが発生しました。',{
                    autoClose: 2500, // Đóng sau 2 giây
                  });
                }
              } catch (error) {
                console.error(error);
                toast.error('エラーが発生しました。',{
                  autoClose: 2500, // Đóng sau 2 giây
                });
              }
            };
            return (
              <div className="approve-item">
              <div
                className="home-item"
                key={index}
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
                <div className="buttons">
              <button className="green" onClick={approveShop}>確認</button>
              <button className="red" onClick={denyShop}>キャンセル</button>
            </div>
              </div>
              </div>
            );
          })): (
            <div className="no-results"><br></br><br></br>承認を待っている喫茶店がありません。</div>
          )}
          </div>
          {shop.length > 6 && <div className="approve-pagination">
          <a className="page" href="!">
            <i className="fa-solid fa-chevron-left"></i>
          </a>
          <a className="page" href="!">
            1
          </a>
          <a className="page" href="!">
            2
          </a>
          <a className="page" href="!">
            3
          </a>
          <a className="page" href="!">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>}
    </section>
  );
};

export default Approve;
