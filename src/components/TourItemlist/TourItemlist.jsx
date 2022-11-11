import React from 'react'
import { BsArrowRight, BsHeart, BsImages, BsPeopleFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import {SiGooglestreetview, SiGooglestreetviews} from 'react-icons/si'
import { MdTransferWithinAStation } from 'react-icons/md';
import { RiMoneyDollarCircleLine, Ri24HoursFill } from "react-icons/ri";
import './style.css';
import Img1 from '../../data/images/banner/16.jpg';
 
const TourItemlist = ({status}) => {


  return (
    <div className={`simpletour-1 ${status}`}>
          <div className='top-container'>
            <div className="box-1">
              <img className='box-img' src={Img1} alt="" />
            </div>
            <div className="boxsub-1">
              <div className='tour-info'>
                <div className="day-length">
                    <Ri24HoursFill className='icon-length'/>
                    <span>12 Days</span>
                </div>
                <div className="title-box">HA LONG 4 DAY - 3 NIGHT</div>
              </div>
              <div className="title-highlight">
                <ul className="highlight">
                  <li>
                    {" "}
                    Taste Hanoi beer and experience the Vietnamese beer drinking
                    cultur{" "}
                  </li>
                  <li>
                    Take in a cooking demonstration with the chef to learn about
                    Vietnamese food, while floating through Halong Bay{" "}
                  </li>
                  <li>
                    {" "}
                    Explore the Imperial Citadel, a UNESCO-designated World
                    Heritage Site, and sample Hue cuisine for its authentic and
                    recognizable flavor{" "}
                  </li>
                  <li>
                    {" "}
                    Try the food at the busiest street booths and secret
                    passageways in Hoi An Town in true native fashion while
                    riding a motorcycle.{" "}
                  </li>
                  <li>
                    {" "}
                    Experience the vast Mekong Delta's rural villages, farming
                    practices, and fruit orchards by boat through its winding
                    canals while sampling local delicacies.
                  </li>
                </ul>
              </div>
              <div className="read-more">
                <div className="icon-show">
                  <div className="money">
                    <RiMoneyDollarCircleLine className='money-icon'/> 
                    <span className='tour-price'>ONLY FROM <b>$3358 </b>PP</span>
                  </div>
                  <div className="tour-journeys">
                    <SiGooglestreetview className='journeys-map'/>
                    <ul className='journeys-list'>
                      <li>Ha Noi</li>
                      <BsArrowRight />
                      <li>HaLong Bay</li>
                      <BsArrowRight />
                      <li>Hoi An</li>
                      <BsArrowRight />
                      <li>Hue</li>
                    </ul>
                  </div>
                </div>
                <div className="button-show">
                  <a href="/"> Show more..</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="bottom-container">
            <div className="handpick">
              <span>Handpicked: </span>
              <div className='handpick-list'>
                <span className='handpick-title'>Hotels</span>
                <FaBed className='handpick-icon'/>
              </div>
              <div className='handpick-list'>
                <span className='handpick-title'>Transfer</span>
                <MdTransferWithinAStation className='handpick-icon'/>
              </div>
              <div className='handpick-list'>
                <span className='handpick-title'>Meals</span>
                <GiMeal className='handpick-icon'/>
              </div>
              <div className='handpick-list'>
                <span className='handpick-title'>Experiences</span>
                <BsImages className='handpick-icon'/>              
              </div>
              <div className='handpick-list'>
                <span className='handpick-title'>Experts</span>
                <BsPeopleFill className='handpick-icon'/>
              </div>
            </div>
            <div className="tour-explore">
              <a href="#!">EXPLORE THIS TRIP</a>
              <BsHeart className='tour-heart'/>
            </div>
          </div>
        </div>
  )
}

export default TourItemlist