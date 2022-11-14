import React from "react";
import "./TravelDetail.css";
import { BsCheck2 } from "react-icons/bs";
import { RiRecordCircleLine } from "react-icons/ri";
import Data from "./../../../data/tourlist.json";
import { useState } from "react";

const TravelDetail = () => {
  const [day, setday] = useState(Data[0].itinerary[0]);
  const daypicker = (d) => {
    setday(d);
    console.log(day);
    console.log(day.content);
  };

  return (
    <div className="detail-tour">
      <div className="title-detailtour"> Tour Details </div>
      <div className="body-detailtour">
        <div className="imaged-tour">
          <img
            src="https://d2lwt6tidfiof0.cloudfront.net/uploads/slide/vietnam-cambodia-family-tour-2-1530003157.jpg"
            alt=""
          />
        </div>
        <div className="peace-tour">
          {day !== null && (
            <div>
              <div className="title-tour">{day.title}</div>
              <ul>
                {day.content.map((d) => (
                  <li>
                    <BsCheck2 />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="bullet-day">
        {Data[0].itinerary.map((d) => (
          <div className="icon-day" onClick={() => daypicker(d)}>
            <RiRecordCircleLine />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelDetail;
