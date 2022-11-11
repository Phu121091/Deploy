import React from 'react'
import "../../TravelStyle/TravelStyle.css"
import TourItemlist from "../../../components/TourItemlist/TourItemlist";

const Cruises = () => {
  return (
    <div className="body-cruises">
    <div className="travelstyle-content">Cruises</div>
    <div className="detail-travelstyle">
      {" "}
      A house is built by hands, but a home is built by heart.{" "}
    </div>
    <div className="travelstyle-container">
    <div className="page-up">
          <div className="title-top"> See The World Together</div>
          <div className="middle-page"> 
            Cruises on luxury yachts on Ha Long Bay, Nha Trang Bay to enjoy the ravishing scenery under the sunset. 
            Take a cruise along the mysterious Mekong River, visit cities and towns to wild villages 
            on the way to visit by comfortable and classy yacht.
          </div>
          <div className="end-page"> Look By Eyes- Feel By Heart </div>
        </div>
        
        <TourItemlist status='rev'/>
        <TourItemlist status='norev'/>
        <TourItemlist status='rev'/>
        <TourItemlist status='norev'/>
    </div>
  </div>
  )
}

export default Cruises