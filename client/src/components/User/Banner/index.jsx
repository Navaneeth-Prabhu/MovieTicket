import React from "react";
import './index.css'

function Index() {
  return (
    <div className="gradient">
      <div className="overlay">
        <img className="banner" src={require("../../../images/Rectangle 2.jpg")} alt="" />
      </div>
      <div className=" content">
        <h1 className="title">Joker</h1>
        <p className="discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos
          consectetur nisi impedit laudantium numquam aperiam expedita et eius
          quibusdam, dignissimos iure cum fugiat ipsum. Exercitationem iusto
          ducimus animi alias.
        </p>
        <h5>somethign new</h5>
      </div>

    </div>
    // <>
    //   <div className="banner">
    //   <img className="banner" src={require("../../../images/Rectangle 2.jpg")} alt="" />
    //     <div className="content">
    //       <div className="title">JOKER</div>
    //       <p>salfj alsf as;ldf oawh e asdlfashdf  akshdf  askdhf aiushf </p>
    //       <h5>netflix orignial</h5>
    //     </div>
    //   </div>
    // </>
  );
}

export default Index;
