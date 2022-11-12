import React from "react";
import "../../TravelStyle/TravelStyle.css"
import TourItemlist from "../../../components/TourItemlist/TourItemlist";


const Classic = () => {
  return (
    <div className="body-classic">
      <div className="banner-picture">
        <div className="title-travelstyle">Classic</div>
        <div className="detail-travelstyle"> Việt Nam - Timeless Charm </div>
      </div>
      <div className="are-main">
      <div className="page-up">
          <div className="title-top"> See The World Together</div>
          <div className="middle-page"> 
          Classic products of VNXpedia spread throughout the length of the country and 
          with two neighboring countries Cambodia and Laos. 
          The opportunity to experience the fusion of tour types in this suite is considered the most prominent feature of our brand. 
          You will be surprised to choose one of the programs below.
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

export default Classic;
