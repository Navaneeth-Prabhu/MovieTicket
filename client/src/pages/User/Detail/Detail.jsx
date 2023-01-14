import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Navbar from "../../../components/User/Navbar";
import ShowReview from "../../../components/User/Review/showReview";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { MovieContext } from "../../../context/movieContext";
import { moviedetails } from "../../../redux/actions/movieAction";
import "./detail.scss";
import { Input, Modal } from "antd";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ReviewModel from '../../../components/User/Review/index'

const { TextArea } = Input;

const Detail = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [submit, setsubmit] = useState(false)
  const [open, setOpen] = React.useState(false);

  const movieInfo = useSelector((state) => state.movieInfo);
  const { movieInformation } = movieInfo;

  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    console.log("id:", id);
    dispatch(moviedetails(id));
    // getMovie()
  }, []);

  return (
    <>
      <Navbar />

      <div className="main"  style={{
               
              backgroundImage: `linear-gradient(90deg, rgb(29, 30, 34) 24.97%, rgb(29, 30, 34) 38.3%, rgba(29, 30, 34, 0.04) 97.47%, rgb(18, 18, 18) 100%),url(${`../../../../../server/public/movies/${movieInformation?.movie._id}.jpg`})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              
            }}>
        <div className="smthing">
          <div className="poster" onClick={() => navigate("/movie/trailler")}>
            <img
              // src={`https://aws-movieticket-bucket.s3.amazonaws.com/${movie._id}.jpg`}
              src={
                movieInformation
                  ? require(`../../../../../server/public/movies/${movieInformation.movie._id}.jpg`)
                  : ""
              }
              alt=""
            />
          </div>
          <div className="trailer">
            <PlayCircleFilledWhiteIcon/>
            <span>Trailer</span>
          </div>
        </div>
        <div className="det">
          <h1 className="title text-6xl ">{movieInformation?.movie.title}</h1>

          <div className="genres">{/* {movieInformation?.Genre} */}</div>
          <div className="genres">
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
          </div>
          <div className="m-0">
            <div className=" py-3 flex gap-4	my-3">
              
              {
                movieInformation?.movie.Review?(<span className=" flex justify-center items-center"><FavoriteRoundedIcon sx={{ color: "red" }} /><h3 className="m-0 text-2xl">{movieInformation?.Percentage}%</h3> <p className="m-0 px-3 text-base">{movieInformation?.ReviewCount} rated</p>  </span>):(<p>no review yet</p>)

              }
            </div>
          </div>
          {/* <div className=' rate flex justify-between bg-gray-800 py-2 rounded-xl max-w-max'>
              <div className='review px-1 rounded flex flex-col justify-center'>
                <h3 className='text-lg m-0 font-medium'>Add your rating & review</h3>
                <p className="m-0 font-normal text-base text-gray-300">Your rating matters</p>
              </div>
              <button className='bg-white text-black rounded px-2 py-2  mx-10 '>
                Rate now
              </button>
            </div> */}
          <div className="cast">
            <div
              sx={{
                width: 300,
                color: "success.main",
              }}
            >
              <h1 className="mt-4">3d /2d</h1> <h2>english</h2>
            </div>
          </div>
          <div
            className="button mt-10 flex"
            onClick={() =>
              navigate(`/buytickets/${movieInformation.movie._id}/select_screen`)
            }
          >
            <button>Book Tickets</button>
          </div>
        </div>
      </div>

      <div className="movieDetails">
        {/* <div className="lines mb-4"></div> */}
        <div className="details text-white mt-5">
          <h2 className="text-2xl font-bold">About the Movie</h2>
          <p>
            hallooo{movieInformation?.movie.description} Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quod quae accusantium labore officia
            odit dignissimos, quaerat consequuntur at nesciunt quas sed.
            Asperiores, dolor suscipit? Iure facere laudantium consequatur
            officia perspiciatis!
          </p>
        </div>
        <div className="lines mb-4"></div>
        <div className="details text-white">
          <h2 className="text-2xl font-bold">TOP Review</h2>
          {/* <p>hallooorder--1</p> */}
          <div className=" rate flex justify-between bg-gray-800 py-2 rounded-xl max-w-max">
            <div className="review px-1 rounded flex flex-col justify-center">
              <h3 className="text-lg m-0 font-medium">
                Add your rating & review
              </h3>
              <p className="m-0 font-normal text-base text-gray-300">
                Your rating matters
              </p>
            </div>
            <button
              className="bg-white text-black rounded px-2 py-2  mx-10"
              style={{ cursor: "pointer" }}
              onClick={handleOpen}
            >
              Rate now
            </button>
            <ReviewModel open={open} setOpen={setOpen} setsubmit={setsubmit}/>
          </div>
     {
      movieInformation?
          <ShowReview movieInfo={movieInformation} submit={submit}/>:""
     }
        </div>
      </div>
    </>
  );
};

export default Detail;
