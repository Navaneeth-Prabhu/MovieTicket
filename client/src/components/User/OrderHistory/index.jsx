import React from "react";
import "./order.scss";
import axios from "axios";

function Order() {
	// useEffect(() => {
		
	//   async function getHistroy(){
	// 	const {data}= await axios.get('http://localhost:3001/reviews',)
	//   }
	// getHistroy()
	// }, [])
	
  return (
    <>
      <div className="mainn w-full p-5 px-20">
        <div className="cardBody bg-white h-full w-full flex">
          <div className="first flex">
            <div className="posters h-full w-56 p-5 flex justify-center">
              <p>helo</p>
            </div>
            <div className="detail p-4">
              <h1 className="movietitle my-2 text-lg font-bold">movie title</h1>
              <div className="theaterDetail text-sm ">
                <p className="mb-0">EVM , Cherthala , Alappuzha</p>
                <p className="time">9:00pm | 01-Jan-2023</p>
              </div>
              <div className="seatDetails mt-3">
                <p className="quantiy text-sm">
                  Quantity : <span>2</span>
                </p>
                <p className="font-semibold">
                  <span>Seats : </span>A2, A3
                </p>
              </div>
              <div className="price mt-3 flex justify-between">
                <div>
                  <p className="mb-1">TicketPrice</p>
                </div>
                <div className="">
                  <span>Rs</span> 240
                </div>
              </div>
              <div className="price  flex justify-between">
                <div>
                  <p>Convinience fee</p>
                </div>
                <div className="">
                  <span>Rs</span> 40
                </div>
              </div>
              <div className="price mt-3 flex justify-between text-lg">
                <div>
                  <p>AMOUNT PAID</p>
                </div>
                <div className="font-bold">
                  <span>Rs</span> 280
                </div>
              </div>
            </div>
          </div>
          <div className="cardRight qr w-100 flex justify-center">
            <div className="QRcode">
              <p>asdfasdf</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mainn w-full p-5 px-20">
        <svg
          width="100%"
          height="300"
          viewBox="0 0 1203 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 0H875.003C875.271 19.3756 891.061 35 910.5 35C929.939 35 945.729 19.3756 945.997 0H1186C1195.39 0 1203 7.61116 1203 17V383C1203 392.389 1195.39 400 1186 400H945.997C945.999 399.834 946 399.667 946 399.5C946 379.894 930.106 364 910.5 364C890.894 364 875 379.894 875 399.5C875 399.667 875.001 399.834 875.003 400H17C7.61112 400 0 392.389 0 383V17C0 7.61117 7.61116 0 17 0Z"
            fill="#E1E1E1"
          />
          <line
            x1="910"
            y1="364.001"
            x2="910"
            y2="34.9999"
            stroke="#969696"
            stroke-width="2"
            stroke-dasharray="4 4"
          />
          <p className="text-black">helloo</p>
        </svg>
      </div>

      <div className="ticket3 flex px-24 py-5">
        <div className="firsthalf p-5 flex">
          <div className="posters h-full w-56">
		  <img
                className="h-full rounded-t-xl"
                src={require(`../../../images/A1JVqNMI7UL._SL1500_.jpg`)}
                alt=""
              />
		  </div>
		  <div className="details ml-5">
			<div className="title">
				Tenet
			</div>
			{/* <p>EVM ,Cherthala</p> */}
			<div className="theaterDetail text-sm ">
                <p className="mb-0">EVM , Cherthala , Alappuzha</p>
                <p className="time">9:00pm | 01-Jan-2023</p>
              </div>
              <div className="seatDetails mt-3 flex justify-between">
                <p className="quantiy text-sm">
                  Quantity : <span>2</span>
                </p>
                <p className="font-semibold">
                  <span>Seats : </span>A2, A3
                </p>
              </div>
              <div className="price mt-3 flex justify-between">
                <div>
                  <p className="mb-1">TicketPrice</p>
                </div>
                <div className="">
                  <span>Rs</span> 240
                </div>
              </div>
              <div className="price  flex justify-between">
                <div>
                  <p>Convinience fee</p>
                </div>
                <div className="">
                  <span>Rs</span> 40
                </div>
              </div>
			  <div className="divide-y divide-dashed">

              <div className="price flex justify-between text-lg font-bold">
                <div>
                  <p>AMOUNT PAID</p>
                </div>
                <div className="font-bold">
                  <span>Rs</span> 280
                </div>
              </div>
			  </div>
		  </div>
        </div>
        <div class="dash border-dashed border-0 border-l-2 border-white-500 ..."></div>
        {/* <div class="dash border-dashed border-l-2 border-white-500 ..."></div> */}
        <div className="secondhalf p-5">
          <div className=" h-full w-50 p-5 flex justify-center text-center">
            <div className="qr w-full h-full">
              <img
                className="h-full w-full"
                src={require(`../../../images/My_Gallery (1).png`)}
                alt=""
              />
              <p>CODE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
