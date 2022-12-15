import React from "react";
import "./index.css";

function Index() {
  return (
    <>
      <div className="movieBanner">
        <div className="overlay">
          <div className="gradient">
            <img src={require("../../../images/Rectangle 2.jpg")} alt="" />
          </div>
        </div>
      </div>
        <div className="moviePoster">
          <img src={require("../../../images/Everything_Everywhere_All_at_Once.jpg")} alt="" />
        </div>
        
    </>
  );
}

export default Index;
