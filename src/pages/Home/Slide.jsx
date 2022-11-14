import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./Slide.css";
import { useState,useEffect } from "react";



const SlideBig = () => {
  // const [size,setsize] =useState(window.screen.width);

  // window.addEventListener('resize', function(event){
  //   setsize(window.screen.width);
  // });

  const contentStyle = {
    height: "700px",
    color: "#fff",
    lineHeight: "700px",
    textAlign: "center",
  };
  

  return (
    <div className="slide-boder">
    <Carousel effect="fade" autoplay duration="5s">
      <div>
        <div style={contentStyle} className="slide-item1 sli"></div>
      </div>
      <div>
        <div style={contentStyle} className="slide-item2 sli"></div>
      </div>
      <div>
        <div style={contentStyle} className="slide-item3 sli"></div>
      </div>
      <div>
        <div style={contentStyle} className="slide-item4 sli"></div>
      </div>
      <div>
        <div style={contentStyle} className="slide-item5 sli"></div>
      </div>
    </Carousel>
    <div className="title-wellcome">
      <h1 className="slide-h1">Wellcome to</h1>
      <h1 className="slide-h2">VNXpedia</h1>
    </div>
    </div>
  );
};

export default SlideBig;
