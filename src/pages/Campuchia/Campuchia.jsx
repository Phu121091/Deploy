import React from 'react'
import CSSModules from "react-css-modules";
import TourItemlist from "./../../components/TourItemlist/TourItemlist";
import "./Campuchia.css";
const Campuchia = () => {
  return (
    <div className="Campuchia">
      <div className="headder-cam"></div>
      <div className="support-1">
        <div className="title-tops"> ASIA | Campuchia </div>
        <div className="title-middle"> Campuchia </div>
        <div className="title-bot">
          {" "}
          Country of Pagodas and Towers{" "}
        </div>
      </div>
      <TourItemlist status="rev" />
      <TourItemlist status="norev" />
      <div className="title-middle"> Hightlight of Campuchia</div>
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
      <div className="title-middle"> Destination of Campuchia</div>
      <div className="place">
        <div className="place-1">
          <div className="a00010">Angkor Wat, Angkor Thom</div>
          <ul>
            <li> 123aaaaaaaaaaaa</li>
          </ul>
        </div>
        <div className="place-1">
          <div className="a00010"> Phnom Penh</div>
        </div>
        <div className="place-1">
          <div className="a00010"> Battambang</div>
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

export default Campuchia