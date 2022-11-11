import React from 'react'
import "../../TravelStyle/TravelStyle.css"
import TourItemlist from "../../../components/TourItemlist/TourItemlist";

const Adventure = () => {
  return (
    <div className="body-adventure">
      <div className="travelstyle-content">Adventure</div>
      <div className="detail-travelstyle">
        {" "}
        A house is built by hands, but a home is built by heart.{" "}
      </div>
      <div className="travelstyle-container">
      <div className="page-up">
          <div className="title-top"> See The World Together</div>
          <div className="middle-page"> 
            Diverse geological activities and unique geographical location are what the history of the earth 
            and nature have bestowed on the S-shaped strip of land. 
            Only in Vietnam can it be fully experienced from these arcs the road through the old forest to eat 
            and sleep with the locals, to cycle on beautiful roads. 
            Feel the richness of nature when conquering majestic mountain peaks, 
            come to explore and marvel in the longest and most beautiful Son Doong cave system of the planet. 
            It took us a lot of research and listening to come up with a very high quality adventure kit.
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

export default Adventure