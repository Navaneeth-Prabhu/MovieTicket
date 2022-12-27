import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../../components/User/Navbar";

// import tmdbApi from '../../../api/tmdbApi';
// import apiConfig from '../../../api/apiConfig';

import "./detail.scss";
// import CastList from './CastList';
// import VideoList from './VideoList';

// import MovieList from '../../components/movie-list/MovieList';

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      // const response = await tmdbApi.detail(category, id, {params:{}});
      // setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      <Navbar />
      {/* <h1 class="text-sky-400">hellooo</h1> */}
      {/* <img className='banner' src={require("../../../images/Rectangle 2.jpg")} alt="" /> */}
      {/* {{ backgroundImage: "url(/image.png)" }} */}
      <div
        className="banner"
        style={{ backgroundImage: `url(../../../images/Rectangle 2.jpg)` }}
      ></div>
      {/* <div className="banner" src={require("../../../../images/Rectangle 2.jpg")}></div> */}
      {/* <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div> */}
      <div className="mb-3 movie-content container">
        <div className="movie-content__poster">
          <img
            className="movie-content__poster img"
            src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
            alt=""
          />
            <div className="traillerbtn button">watch trailler</div>
          {/* <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div> */}
        </div>
        <div className="movie-content__info">
          <h1 className="title">EVERYTHING EVERYWHERE ALL AT ONCE</h1>
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
