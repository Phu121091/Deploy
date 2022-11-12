import React from 'react'
import TourItemlist from "./../../components/TourItemlist/TourItemlist";
import "./Thailan.css";
const Thailan = () => {
  return (
    <div className="Thailan">
      <div className="headder-thai"></div>
      <div className="support-1">
        <div className="title-tops"> ASIA | Thailan </div>
        <div className="title-middle"> Thailan </div>
        <div className="title-bot">
          {" "}
          Land of the Golden Temple{" "}
        </div>
      </div>
      {/* <TourItemlist status="rev" />
      <TourItemlist status="norev" /> */}
      <div className="title-middle"> Hightlight of Thailan</div>
      <div className="piture-lao">
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
        <div className="pictulao"></div>
      </div>
      <div className="title-middle"> Destination of Thailan</div>
      <div className="place">
        <div className="place-1">
          <div className="a00010"> Bangkok</div>
        </div>
        <div className="place-1">
          <div className="a00010"> Koh Panyee</div>
        </div>
        <div className="place-1">
          <div className="a00010"> Pattaya</div>
        </div>
      </div>
      <div className="title-middle"> Experience</div>
      <div className="place">
        <div className="place-1">
          <div className="a00010"> </div>
        </div>
        <div className="place-1">
          <div className="a00010"></div>
        </div>
        <div className="place-1">
          <div className="a00010"></div>
        </div>
        <div className="place-1">
          <div className="a00010"></div>
        </div>
      </div>
    </div>
  )
}

export default Thailan