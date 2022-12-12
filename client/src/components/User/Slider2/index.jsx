import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  const navigate = useNavigate();

  const details = () => {
    navigate("/detials")
  };
  return (
    <>
    <div className="section">
    <h1>helo</h1>
    {/* <div className="cards"> */}

      <Swiper
        slidesPerView={4.5}
        spaceBetween={30}
        slidesPerGroup={4.5}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        clickable={true}
        breakpoints={{
            0:{
                slidesPerView:1.5,
                spaceBetween:5,
                slidesPerGroup:1.5,
            },
            480:{
                slidesPerView:2,
                spaceBetween:10,
                slidesPerGroup:2,
            },
            768:{
              slidesPerGroup:3.5,
                slidesPerView:3.5,
                spaceBetween:15
            },
            1240:{
              slidesPerGroup:4.5,
                slidesPerView:4.5,
                spaceBetween:5
            }
        }}
      >
        <SwiperSlide>
          {" "}
          <div className="card" onClick={details}>
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fffff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    {/* </div> */}
    </div>
    </>
  );
}
