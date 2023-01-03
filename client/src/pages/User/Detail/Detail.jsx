import React, { useEffect, useState,useContext } from "react";
import { useNavigate, useParams } from "react-router";
import Navbar from "../../../components/User/Navbar";
import { MovieContext } from "../../../context/movieContext";
import "./detail.scss";


const Detail = () => {
  // const [movieDetail, setmovieDetail] = useState()
  const navigate = useNavigate()
  const{MovieDetails} = useContext(MovieContext)
  // const { category, id } = useParams();



  useEffect(() => {
    const {} = MovieDetails
  }, []);

  return (
    <>
      <Navbar />
     
      <div
        className="banner"
        style={{ backgroundImage: `url(../../../images/Rectangle 2.jpg)` }}
      ></div>
      {/* <div className="banner" src={require("../../../../images/Rectangle 2.jpg")}></div> */}
      {/* <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div> */}
      <div className="mb-3 movie-content container">
        <div className="movie-content__poster" onClick={()=>navigate('/movie/trailler')}>
          <img
            className="movie-content__poster img"
            src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
            alt=""
          />
            <div className="traillerbtn button">watch trailler</div>
          {/* <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div> */}
        </div>
        <div className="movie-content__info">
          <h1 className="title">{MovieDetails.title}</h1>
          <div className="genres">
            {/* {
                                        
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                                <span key={i} className="genres__item">{genre.name}</span>
                                            ))
                                        } */}

            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
            <span className="genres__item">advanture</span>
          </div>
          <div className="rate">
            <span>Rate the movie</span>
          </div>
          {/* <p className="overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac justo id metus vehicula eleifend. Vivamus lacinia imperdiet orci, nec bibendum lectus porta eget. Fusce nisi urna, tincidunt ac consequat sed, cursus a ex. Nulla aliquet neque ac maximus pulvinar. Phasellus ac urna at nisi rutrum posuere. Vivamus semper tempor lectus, et ultricies dui pharetra a. Cras eget molestie sapien </p> */}
          <div className="cast">
            <div
              sx={{
                width: 300,
                color: "success.main",
              }}
            >
              <h1>3d /2d</h1> <h2>english</h2>
            </div>
          </div>
          <div className="button">
            Book Tickets
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
