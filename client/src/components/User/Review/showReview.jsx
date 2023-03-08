import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./carsole.css";
import { Pagination } from "swiper";
import { style } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import { useSelector } from "react-redux";
import axios from "axios";

function ShowReview({movieInfo,submit}) {
  
  const { movie } = movieInfo;
  const [review, setreview] = useState()
  

  useEffect(() => {
    async function getReview (){
     const {data} = await axios.get(`http://localhost:3001/getAllReview/${movie._id}`)

     setreview(data)
      
    }
    getReview()
  }, [submit])
  

  return (
    <>
      <div className="mt-5">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiperr "
        >
          {review?.map((item, index) => (
            <SwiperSlide className="bg-white max-h-35 rounded-lg flex flex-col w-full h-44 max-h-44 p-6">
              {/* <div className="flex flex-col w-full h-44 max-h-44 p-4 rounded-lg bg-gray-700" > */}
                <div className="head flex justify-between text-gray-800 w-full ">
                  <div className="user font-bold">{item.userName? item.userName : 'gust user'}</div>
                  <div className="rating font-bold">
                    <StarIcon style={{ color: "red" }} />
                    <span className="ml-1">{item.rating}/5</span>
                  </div>
                </div>
                <div className="flex w-full mt-4">
                  <p className="text-black text-left">
                    {item.message} 
                  </p>
                </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ShowReview;
