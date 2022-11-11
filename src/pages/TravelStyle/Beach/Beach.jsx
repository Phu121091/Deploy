import React from "react";
import "../../TravelStyle/TravelStyle.css"
import { RiMoneyDollarCircleLine, Ri24HoursFill } from "react-icons/ri";
import TourItemlist from "../../../components/TourItemlist/TourItemlist";

const Beach = () => {
  return (
    <div className="body-beach">
      <div className="travelstyle-content">Beach</div>
      <div className="detail-travelstyle">
        {" "}
        A house is built by hands, but a home is built by heart.{" "}
      </div>
      <div className="travelstyle-container">
      <div className="page-up">
          <div className="title-top"> See The World Together</div>
          <div className="middle-page"> 
            With a coastline stretching from the northern pole (Mong Cai) to the southernmost 
            tip of the country (Ca Mau) - Vietnam is also known as the island nation with many enchanting beaches 
            and mysterious caves. Many times recently, the beaches of Da Nang, Nha Trang, Phu Quoc 
            and the system of sea islands and Ha Long caves have been honored by reputable tourism organizations and magazines. 
            Please see below for more details.
          </div>
          <div className="end-page"> Look By Eyes- Feel By Heart </div>
        </div>
        
        <TourItemlist status='rev'/>
        <TourItemlist status='norev'/>
        <TourItemlist status='rev'/>
        <TourItemlist status='norev'/>
      </div>
    </div>
  );
};

export default Beach;
