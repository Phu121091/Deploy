import React from "react";
import "../../TravelStyle/TravelStyle.css";
import TourItemlist from "../../../components/TourItemlist/TourItemlist";
const ShortTrips = () => {
  return (
    <div className="body-shorttrips">
      <div className="travelstyle-content">ShortTrips</div>
      <div className="detail-travelstyle">
        A house is built by hands, but a home is built by heart.
      </div>
      <div className="travelstyle-container">
      <div className="page-up">
          <div className="title-top"> See The World Together</div>
          <div className="middle-page"> 
            The hustle and bustle of life is not an ideal condition for many tourists who want to experience Vietnam with not much holiday time. 
            We have carefully researched and built short-term travel programs and products, 
            but still enough time for customers to have all the memories and experiences. 
            Short-term products spread throughout 3 regions of Vietnam bring full satisfaction to customers.
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

export default ShortTrips;
