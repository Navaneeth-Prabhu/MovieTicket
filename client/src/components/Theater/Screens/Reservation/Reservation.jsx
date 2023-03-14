import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { moviedetails } from "../../../../redux/actions/movieAction";

function Reservation() {
  let dispatch = useDispatch()
  const navigate = useNavigate();
  const [cookies] = useCookies([]);
  const token = cookies.jwt;
  const decoded = jwt_decode(token);
  const [Show, setShow] = useState([]);
  useEffect(() => {
    const token = cookies.jwt;
    const decoded = jwt_decode(token);
    const id = decoded.id;
    axios
      .get(`http://localhost:3001/theater/getShowMovie/${id}`)
      .then(({ data }) => {
        setShow(data);
        // console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectedMovieToState = (data) => {
    console.log(data.movieName);
    //  dispatch(moviedetails(data._id));
     dispatch(moviedetails(data.movieName._id));
    navigate(`/theater/buytickets/${data.movieName._id}/select_screen`);
  };
  // console.log(".....Show", Show);
  return (
    <>
      Reservation
      <h2>Currunt Shows</h2>
      <div className="w-full flex flex-wrap my-6">
        {Show?.map((shows, screenIndex) => (
          <div className="flex">
            {shows?.showInfo?.map((item, index) => (
              <div className="flex flex-col items-center w-[11rem] h-80">
                <p className="text-white">{item?.screen}</p>
                <p className="text-white">{item?.movieName?.title}</p>
                <div className="flex space-x-2">
                  {item?.time?.map((time) => (
                    <p className="text-white">{time}</p>
                  ))}
                </div>
                <div className="h-52 w-36">
                  <img
                    className="h-full w-full"
                    src={item?.movieName?.PosterImg}
                    alt=""
                  />
                </div>
                <button onClick={() => selectedMovieToState(item)}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Reservation;
