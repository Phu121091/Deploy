import React from 'react'
import { BsArrowRight, BsHeart, BsImages, BsPeopleFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import {SiGooglestreetview} from 'react-icons/si'
import { MdTransferWithinAStation } from 'react-icons/md';
import { RiMoneyDollarCircleLine, Ri24HoursFill } from "react-icons/ri";
import './style.css';
import Img1 from '../../data/images/banner/16.jpg';
 
const TourItemlist = ({status,data}) => {


  return (
    <div className={`simpletour-1 ${status}`} key={data.id}>
          <div className='top-container'>
            <div className="box-1">
              <img className='box-img' src={Img1} alt="" />
            </div>
            <div className="boxsub-1">
              <div className='tour-info'>
                <div className="day-length">
                    <Ri24HoursFill className='icon-length'/>
                    <span>{data.itinerary.length} day</span>
                </div>
                <div className="title-box">{data.title}</div>
              </div>
              <div className="title-highlight">
                
                <ul className="highlight">
                  {data.highlight.map((d)=><li>{d}</li>)}
                  {/* <li>
                    {" "}
                      We'll see that in Hanoi's lovely Old Quarter, where the city's hectic rhythm may be experienced.{" "}
                  </li>
                  <li>
                    {" "}
                    Great entertainment and the ideal opportunity to sample some of the lesser-known foods that locals in Hanoi and Hoi An enjoy eating.{" "}
                  </li>
                  <li>
                    {" "}
                    Take in the breathtaking natural splendor of Halong Bay, which is a World Heritage Site and is also known as "Dragon Descending to the Sea" in Vietnamese.{" "}
                  </li>
                  <li>
                    {" "}
                    Gain deeper insight into locals' daily lives in the Mekong Delta, which serves as a spiritual representation of the region's distinctiveness.{" "}
                  </li>
                  <li>
                    {" "}
                    Get the chance to learn about a fun itinerary and take part in a lot of activities with locals, on Tan Phong island.{" "}
                  </li> */}
                </ul>
              </div>
              <div className="read-more">
                <div className="icon-show">
                  <div className="money">
                    <RiMoneyDollarCircleLine className='money-icon'/> 
                    <span className='tour-price'>ONLY FROM <b>{data.price} </b>PP</span>
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
                      <BsArrowRight />
                      <li>...</li>
                    </ul>
                  </div>
                </div>
                <div className="button-show">
                  <a href="/">Detail ...</a>
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