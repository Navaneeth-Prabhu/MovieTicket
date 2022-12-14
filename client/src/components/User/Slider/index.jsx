import React, { Component } from "react";
import Slider from "react-slick";

import './index.css'

export default class Responsive extends Component {
  render() {
    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      // sliderPerView:4.5,
      // slidesPerGroup:4.5,
      
      // swipe:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            arrows:false
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
            initialSlide: 2.5,
            arrows:false
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1.5,
            arrows:false
          },
        },
      ],
    };
    return (
      <div className="section">
        <h2 className="head"> Upcoming </h2>
        <Slider {...settings}>
          <div className="card" >
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img
                src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p className="title">Avatar: The Way of Water</p>
              <p className="description">fff</p>
              <p className="description">asdfasdf</p>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}