import React from "react";
import "./index.css";

function index() {
  return (
    <>
      <div className="movieBanner">
        <div className="overlay">
          <div className="gradient">
            <img src={require("../../../images/1508269.jpg")} alt="" />
          </div>
        </div>
      </div>
        <div className="moviePoster">
          <img src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")} alt="" />
        </div>
    </>
  );
}

export default index;
