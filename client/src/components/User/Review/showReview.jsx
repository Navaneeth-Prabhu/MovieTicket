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
            <SwiperSlide className="bg-white max-h-35 rounded">
              <div className="flex flex-col w-full max-h-38">
                <div className="head flex justify-between text-black text-gray-800 w-full px-5">
                  <div className="user font-bold">User</div>
                  <div className="rating font-bold">
                    <StarIcon style={{ color: "red" }} />
                    <span className="ml-1">{item.rating}/5</span>
                  </div>
                </div>
                <div className=" px-5 mt-5 ">
                  <p className="text-black text-left">
                    {item.message} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quos nesciunt a voluptatum illum. Ipsam,
                    enim incidunt earum atque voluptates unde error.
                    Exercitationem minima at, consequuntur delectus eveniet
                    quae. Distinctio, laboriosam.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ShowReview;
