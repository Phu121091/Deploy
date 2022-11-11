import React from "react";
import "../../TravelStyle/TravelStyle.css"
import TourItemlist from "../../../components/TourItemlist/TourItemlist";

const Family = () => {
  return (
    <div className="body-family">
      <div className="travelstyle-content">Family</div>
      <div className="detail-travelstyle">
        {" "}
        A house is built by hands, but a home is built by heart.{" "}
      </div>
      <div className="travelstyle-container">
      <div className="page-up">
          <div className="title-top"> See The World Together</div>
          <div className="middle-page"> 
            Unlike all other countries in the world. 
            The diversity of weather, geography, culture, cuisine, religion among regions. 
            That creates a mysterious and exciting Vietnam and is a trending trend of family travel programs. 
            Generations in a family have their own experience and enjoyment of each tailor-made program.
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

export default Family;
