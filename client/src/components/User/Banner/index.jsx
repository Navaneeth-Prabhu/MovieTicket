import React from "react";
import './banner.css'
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

function Index() {
  return (
    // <div className="gradient">
    //   <div className="overlay">
    //     <img className="banner" src={require("../../../images/Rectangle 2.jpg")} alt="" />
    //   </div>
    //   <div className=" content">
    //     <h1 className="title">Joker</h1>
    //     <p className="discription">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos
    //       consectetur nisi impedit laudantium numquam aperiam expedita et eius
    //       quibusdam, dignissimos iure cum fugiat ipsum. Exercitationem iusto
    //       ducimus animi alias.
    //     </p>
    //     <h5>somethign new</h5>
    //   </div>

    // </div>

    <>
     <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="containerr">
            <div className="gradient">
              <div className="overlay">
                <div className="topGradient">

              <img
                className="" style={{width:"100%"  ,height:"100%"}}
                src={require("../../../images/Rectangle 2.jpg")}
                alt="First slide"
              />
                </div>

              </div>

            </div>

              
          <div class="top-left">
            {/* <h1>joker</h1>
            <p className="discription">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos
           consectetur nisi impedit laudantium numquam aperiam expedita et eius
           quibusdam, dignissimos iure cum fugiat ipsum. Exercitationem iusto
           ducimus animi alias.
         </p>  */}
          </div>
          </div>
        {/* <div className="bannerImage" style={{width:'100%',height:'500px'}}>
            </div>
               <div className=" content">
         <h1 className="title">Joker</h1>
         <p className="discription">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos
           consectetur nisi impedit laudantium numquam aperiam expedita et eius
           quibusdam, dignissimos iure cum fugiat ipsum. Exercitationem iusto
           ducimus animi alias.
         </p> */}
     {/* <h5>somethign new</h5> */}
       {/* </div> */}

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
    </>
  );
}

export default Index;
