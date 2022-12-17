import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const details = () => {
    navigate("/moviedetails")
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/movieInfo")
      .then(({ data }) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };


  return (
    <>
    <div className="section">
    <h2 className="head"> Streming now </h2>
    {/* <div className="cards"> */}

      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        slidesPerGroup={5}
        speed={600}
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
              slidesPerGroup:5,
                slidesPerView:5,
                spaceBetween:5
            }
        }}
      >
        <SwiperSlide>

          {" "}
          {data.map((movie) => (
        
     
          <div className="card" onClick={details}>
            <div className="cardImage">
              <img
                src={`https://aws-movieticket-bucket.s3.amazonaws.com/${movie._id}.jpg`}
                // src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">{movie.title}</p>
              {/* <p className="title">{m}</p> */}
              <p className="description">{movie.Genre}</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
           ))}
        </SwiperSlide>
       
      </Swiper>
    {/* </div> */}
    </div>
    </>
  );
}
