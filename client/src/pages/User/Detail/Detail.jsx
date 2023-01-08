import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Navbar from "../../../components/User/Navbar";
import Review from "../../../components/User/Review";
import ShowReview from "../../../components/User/Review/showReview";
import { MovieContext } from "../../../context/movieContext";
import "./detail.scss";

const Detail = () => {
  // const [movieDetail, setmovieDetail] = useState()
  const navigate = useNavigate();
  const { MovieDetails } = useContext(MovieContext);
  const { id } = useParams();
  // console.log("idddd",id)
  const movieInfo = useSelector((state) => state.movieInfo);
  const { movieInformation } = movieInfo;

  // useEffect(() => {
  //   async function getMovie(){
  //     console.log("asdfhopiweh qowiehrower qwhr co");

  //     await axios.get(`http://localhost:3001/moviedetails/${id}`)
  //   }
  //   // await axios.get("moviedetails/")
  //     getMovie()
  // }, []);

  return (
    <>
      <Navbar />

      {/* <div
        className="banner"
        style={{ backgroundImage: `url(../../../images/Rectangle 2.jpg)` }}
      ></div> */}

      {/* <div className="mb-3 movie-content container">
        <div className="movie-content__poster" onClick={()=>navigate('/movie/trailler')}>
        <img 
                // src={`https://aws-movieticket-bucket.s3.amazonaws.com/${movie._id}.jpg`}
                src={require(`../../../../../server/public/movies/${movieInformation._id}.jpg`)}
                alt=""
              />
            <div className="traillerbtn button">watch trailler</div>
        
        </div>
        <div className="movie-content__info">
          <h1 className="title">{movieInformation.title}</h1>
          <div className="genres">


            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
          </div>
          <div className="m-0">

          <h1 className='text-xl py-3 flex gap-4 items-center	m-0'>
             
              <h3 className="m-0">91%</h3> <p className="m-0">5.6k ratings</p>
            </h1>
          </div>
          <div className=' rate flex justify-between bg-gray-800 py-2 rounded-xl max-w-max'>
              <div className='review px-1 rounded flex flex-col justify-center'>
                <h3 className='text-lg m-0 font-medium'>Add your rating & review</h3>
                <p className="m-0 font-normal text-base text-gray-300">Your rating matters</p>
              </div>
              <button className='bg-white text-black rounded px-2 py-2  mx-10 '>
                Rate now
              </button>
            </div>
        
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
          <div className="button" onClick={()=>navigate(`/buytickets/${movieInformation._id}/select_screen`)}>
                <button>Book Tickets</button>
              </div>
        </div>
      </div> */}

      <div className="main">
        <div className="smthing">
          <div className="poster" onClick={() => navigate("/movie/trailler")}>
            <img
              // src={`https://aws-movieticket-bucket.s3.amazonaws.com/${movie._id}.jpg`}
              src={require(`../../../../../server/public/movies/${movieInformation._id}.jpg`)}
              alt=""
            />
          </div>
          <div className="trailer">
            <span>Trailer</span>
          </div>
        </div>
        <div className="det">
          <h1 className="title text-6xl ">{movieInformation.title}</h1>
          <div className="genres">
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
          </div>
          <div className="m-0">
            <h1 className="text-xl py-3 flex gap-4 items-center	my-3">
              <h3 className="m-0">91%</h3> <p className="m-0">5.6k ratings</p>
            </h1>
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
            className="button"
            onClick={() =>
              navigate(`/buytickets/${movieInformation._id}/select_screen`)
            }
          >
            <button>Book Tickets</button>
          </div>
        </div>
      </div>

      <div className="movieDetails">
      <div className="lines mb-4"></div>
        <div className="details text-white">
          <h2 className="text-2xl font-bold">About the Movie</h2>
          <p>hallooo{movieInformation.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quae accusantium labore officia odit dignissimos, quaerat consequuntur at nesciunt quas sed. Asperiores, dolor suscipit? Iure facere laudantium consequatur officia perspiciatis!</p>
        </div>
        <div className="lines mb-4"></div>
        <div className="details text-white">
          <h2 className="text-2xl font-bold">TOP Review</h2>
          <p>hallooorder--1</p>
          <div className=' rate flex justify-between bg-gray-800 py-2 rounded-xl max-w-max'>
              <div className='review px-1 rounded flex flex-col justify-center'>
                <h3 className='text-lg m-0 font-medium'>Add your rating & review</h3>
                <p className="m-0 font-normal text-base text-gray-300">Your rating matters</p>
              </div>
              <button className='bg-white text-black rounded px-2 py-2  mx-10 '>
                Rate now
              </button>
            </div>
            <Review/>
            <ShowReview/>
        </div>
      </div>
    </>
  );
};

export default Detail;
