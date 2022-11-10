import React from "react";
import "./Vietnam.css";

const Vietnam = () => {
  return (
    <div>
      <div className="header-vietnam">
        <div className="top-body">
          <div className="thead pleft "></div>
          <div className="thead pcenter "></div>
          <div className="thead pright "></div>
        </div>
        <div className="text-head">Wellcome to Viet Nam</div>
        <div className="text-mid">
          Viet Nam - Ve dep tiem an trong moi con nguoi
        </div>
      </div>
      <div className="body-vietnam">
        <div className="box-area">
          <div className="title-vietnam">
            <div className="titile-top"> Plane Your Travel</div>
            <div className="title-bottom"> Where you go next?</div>
          </div>
        </div>
        <div className="picture-area">
          <div className="space">BAC</div>
          <div className="space">TRUNG</div>
          <div className="space">NAM</div>
        </div>
    
      </div>
      <div className="info-region">
        <div className="title-vietnam">
          <div className="titile-top"> Let's i tell you</div>
          <div className="title-bottom"> Some where you can like it!</div>
        </div>
        <div className="picture-region">
          <div className="a000001 s1"> Sapa</div>
          <div className="a000001 s2"> Ha Noi</div>
          <div className="a000001 s3"> Ha Long</div>
          <div className="a000001 s4"> Da Nang</div>
          <div className="a000001 s5"> Hue</div>
          <div className="a000001 s6"> Sai Gon</div>
          <div className="a000001 s7"> Phu Quoc</div>
          <div className="a000001 s8"> Bach Long Vi</div>
          <div className="a000001 s9"> Da Lat</div>
          <div className="a000001 s10"> Ca Mau</div>
        </div>
      </div>
      <div className="a0002">
      <div className="area1">
            <div className="about-content">
               <div className="a0003"> Viet Nam co nhung gi? </div>
            </div>
            <div className="menu-area1">
                <ul>
                    <li> <a href="/">Info</a></li>
                    <li> <a href="/">Weather</a></li>
                    <li><a href="/">Destination Famous</a> </li>
                    <li><a href="/">Place to go</a> </li>
                </ul>       
            </div>
         </div>
      </div>
    </div>
  );
};

export default Vietnam;
