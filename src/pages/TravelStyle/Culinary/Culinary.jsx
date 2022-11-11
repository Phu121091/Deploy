import React from 'react';
import "../../TravelStyle/TravelStyle.css"
import TourItemlist from "../../../components/TourItemlist/TourItemlist";

const Culinary = () => {
  return (
    <div className="body-culinary">
    <div className="travelstyle-content">Culinary</div>
    <div className="detail-travelstyle">
      
      A house is built by hands, but a home is built by heart.
    </div>
    <div className="travelstyle-container">
    <div className="page-up">
          <div className="title-top"> See The World Together</div>
          <div className="middle-page"> 
            Ranked as one of the rare countries in the world with the richest cuisine. 
            The traditional delicacies of Vietnam are distinguished not only by the variety of ingredients 
            that combine ingredients from the subtropical natural breath of ingredients and spices, 
            but also famous for their age-old secrets. 
            The heirloom is fully inherited and is being brought up to the level of sophistication to conquer the taste buds of foodies around the world. 
            VNXpedia's food tours are an opportunity for diners to taste and experience most of these quintessence, from street food to royal parties.
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

export default Culinary