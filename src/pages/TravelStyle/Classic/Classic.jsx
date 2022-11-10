import React from "react";
import "./Classic.css";
import TourItemlist from "../../../components/TourItemlist/TourItemlist";

const Classic = () => {
  return (
    <div className="body-classic">
      <div className="banner-picture">
        <div className="title-classic">Classic</div>
        <div className="detail-classic"> Việt Nam - Timeless Charm </div>
      </div>
      <div className="are-main">
      <div className="page-up">
          <div className="title-top"> See The World Together</div>
          <div className="middle-page"> 
          We don’t believe “let’s have kids” should mean you have to stop exploring the world.
           We also don’t believe you should get home from a holiday just as tired as when you left.
            So we have real parents at B&R design and test-drive everything.
             Our resulting journeys get rave reviews from young and young-at-heart people alike.
              Nothing’s dumbed-down, everything’s 100% stress-free, 
              and there’s always as much action and excitement as the kids can handle.
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
