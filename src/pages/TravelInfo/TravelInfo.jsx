import { BsFillTreeFill, BsHeart } from 'react-icons/bs';
import { MdFoodBank, MdKayaking, MdKeyboardArrowDown } from 'react-icons/md';
import {BiMap, BiSwim} from 'react-icons/bi';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'
import {RiHotelBedFill} from 'react-icons/ri'
import './TravelInfo.css';
import { GiCruiser, GiCultist, GiPagoda, GiSpeedBoat } from 'react-icons/gi';

function TravelInfo() {
    return ( <div className="wrapper">
        <div className="banner-info">
            <div className="banner-img">
                <img className='ban-img' src="https://d2lwt6tidfiof0.cloudfront.net/uploads/photo-tour/vietnam-highlights854-1389-570.jpg" alt="" />
            </div>
            <div className='banner-content'>
                <h1 className='banner-title'>DISCOVER THE HIGHLIGHTS OF VIETNAM</h1>
                <p className='banner-security'>Private & Tailored Tour</p>
                <BsHeart className='banner-like'/>
                <p className='banner-price'>FROM <b>UD$1111</b> PP</p>
                <button className='banner-options'>CHOOSE BUDGET & ENQUIRY NOW</button>
                <div className="banner-time">
                    <div>
                        <span>COUNTRY</span>
                        <span style={{'tooltipSize': '30px', 'tooltipWeight': 600}}>1</span>
                    </div>
                    <div>
                        <span>DISTINATIONS</span>
                        <span style={{'tooltipSize': '30px', 'tooltipWeight': 600}}>7</span>
                    </div>
                    <div>
                        <span>DAYS</span>
                        <span style={{'tooltipSize': '30px', 'tooltipWeight': 600}}>12</span>
                    </div>
                </div>
                <MdKeyboardArrowDown className='banner-arrow'/>
            </div>
        </div>
        <div className="travel-address">
            <div className='travel-intro'>
                <span className='travel-title'>VietNam - The Land of Timeless Charm</span>
                <img src="https://d2lwt6tidfiof0.cloudfront.net/images/destination/vietnam.jpg" alt="" />
            </div>
            <div className="travel-local">
                <div className='local-list'>    
                    <BiMap className='local-icon'/>
                    <a href="#!" target="_blank" rel="noopener noreferrer">HA NOI</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">SAPA</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">HALONG BAY</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">HUE</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">HOI AN</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">HO CHI MINH</a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">MEKONG</a>
                </div>
                <div className="local-slide">
                    <MdArrowBackIosNew className='slider-move'/>
                    <div className='slick-slide'>
                        <a href="#!" className="address" tabIndex="-1">
                            <div className='address-detail' 
                            style={{'backgroundImage': 'url(https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg)'}}> 
                                <div className="box-text">
                                    <p className="name" data-content="Halong Bay">Halong Bay</p>
                                    <p>1 Day</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='slick-slide'>
                        <a href="#!" className="address" tabIndex="-1">
                            <div className='address-detail' 
                            style={{'backgroundImage': 'url(https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg)'}}> 
                                <div className="box-text">
                                    <p className="name" data-content="Halong Bay">Halong Bay</p>
                                    <p>1 Day</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='slick-slide'>
                        <a href="#!" className="address" tabIndex="-1">
                            <div className='address-detail' 
                            style={{'backgroundImage': 'url(https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg)'}}> 
                                <div className="box-text">
                                    <p className="name" data-content="Halong Bay">Halong Bay</p>
                                    <p>1 Day</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='slick-slide'>
                        <a href="#!" className="address" tabIndex="-1">
                            <div className='address-detail' 
                            style={{'backgroundImage': 'url(https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg)'}}> 
                                <div className="box-text">
                                    <p className="name" data-content="Halong Bay">Halong Bay</p>
                                    <p>1 Day</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='slick-slide'>
                        <a href="#!" className="address" tabIndex="-1">
                            <div className='address-detail' 
                            style={{'backgroundImage': 'url(https://d2lwt6tidfiof0.cloudfront.net/uploads/googlemap/sapa-188-559-300.jpg)'}}> 
                                <div className="box-text">
                                    <p className="name" data-content="Halong Bay">Halong Bay</p>
                                    <p>1 Day</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <MdArrowForwardIos className='slider-move'/>
                </div>
                <div className="local-tooltip">
                    <a href="#!" title="Swimming" className="icon-tooltip">
                        <BiSwim className='icon-font' />
                        <span>Swimming<i></i></span>
                    </a> 
                    <a href="#!" title="Cruising" className="icon-tooltip">
                        <GiCruiser className='icon-font' />
                        <span>Cruising<i></i></span>
                    </a> 
                    <a href="#!" title="Boating" className="icon-tooltip">
                        <GiSpeedBoat className='icon-font' />
                        <span>Boating<i></i></span>
                        </a> 
                    <a href="#!" title="Cultural" className="icon-tooltip">
                        <GiCultist className='icon-font' />
                        <span>Cultural<i></i></span>
                        </a> 
                    <a href="#!" title="Heritage" className="icon-tooltip">
                        <GiPagoda className='icon-font' />
                        <span>Heritage<i></i></span>
                    </a>
                    <a href="#!" title="Nature" className="icon-tooltip">
                        <BsFillTreeFill className='icon-font' />
                        <span>Nature<i></i></span>
                    </a> 
                    <a href="#!" title="Cuisine" className="icon-tooltip">
                        <MdFoodBank className='icon-font' />
                        <span>Cuisine<i></i></span>
                    </a> 
                    <a href="#!" title="Kayaking" className="icon-tooltip">
                        <MdKayaking className='icon-font' />
                        <span>Kayaking<i></i></span>
                    </a>
                </div>
                <p className="paragraph">Vietnam - Our country which is located in in the East of Indochinese Peninsula is furthering its case as natural and cultural destination, not just a stopover to the beach. 
                    Trekking in Sapa Town to the ethnic villages Lao Chai - Ta Van - Giang Ta Chai, Kayaking in the magnificent Halong Bay, Learning the history of Hue Old Citadel, 
                    Interacting with friendly local people in floating Mekong Delta will absolutely highlight your holiday in our beautiful country. 
                    And if you still fall in love with the beach, hop on the fresh air and stunning beaches in Hoi An in the Central of Vietnam, you will love the sunshine and the waves in the wonderful atmosphere of peaceful town.
                </p>
                <h2 className="inclusions-line">Inclusions of this tour</h2>
                <div className="inclusions-detail">
                    <div className="inclusions-accomodation">
                        <div className='accomodation-note'>
                            <RiHotelBedFill className='accomodation-icon'/>
                            <span>Accomodation</span>
                        </div>
                        <div className='accomodation-more'>
                            <p>Hotel (10 nights), Cruise (1 night)</p>
                            <a href="#!">Read more ...</a>
                        </div>
                    </div>
                    <div className="inclusions-transport">
                        <div className='transport-note'>
                            <RiHotelBedFill className='transport-icon'/>
                            <span>Transport</span>
                        </div>
                        <div className='transport-more'>
                            <p>Hotel (10 nights), Cruise (1 night)</p>
                            <a href="#!">Read more ...</a>
                        </div>
                    </div>
                    <div className="inclusions-team">
                        <div className='team-note'>
                            <RiHotelBedFill className='team-icon'/>
                            <span>Team</span>
                        </div>
                        <div className='team-more'>
                            <p>Hotel (10 nights), Cruise (1 night)</p>
                            <a href="#!">Read more ...</a>
                        </div>
                    </div>  
                    <div className="inclusions-meals">
                        <div className='meals-note'>
                            <RiHotelBedFill className='meals-icon'/>
                            <span>Meals</span>
                        </div>
                        <div className='meals-more'>
                            <p>Hotel (10 nights), Cruise (1 night)</p>
                            <a href="#!">Read more ...</a>
                        </div>
                    </div> 
                    <div className="inclusions-experiences">
                        <div className='experiences-note'>
                            <RiHotelBedFill className='experiences-icon'/>
                            <span>Experiences</span>
                        </div>
                        <div className='experiences-more'>
                            <p>Hotel (10 nights), Cruise (1 night)</p>
                            <a href="#!">Read more ...</a>
                        </div>
                    </div> 
                    <div className="inclusions-services">
                        <div className='services-note'>
                            <RiHotelBedFill className='services-icon'/>
                            <span>Services</span>
                        </div>
                        <div className='services-more'>
                            <p>Hotel (10 nights), Cruise (1 night)</p>
                            <a href="#!">Read more ...</a>
                        </div>
                    </div>
                </div>
                <div className="tour-highlights">   
                    <h2>HIGHLIGHTS OF THIS TOUR</h2>
                    <div className='hightlight-content'>
                        <div className="tour-intro">
                            <img src="https://d2lwt6tidfiof0.cloudfront.net/uploads/slide/vietnam-cambodia-family-tour-2-1530003157.jpg" alt="" />
                            <img src="https://d2lwt6tidfiof0.cloudfront.net/uploads/slide/vietnam-cambodia-family-tour-2-1530003157.jpg" alt="" />
                        </div>
                        <div className="tour-highlight">
                            <ul>
                                <li>Have great family moments with water puppet show and cyclo ride in Hanoi capital</li>
                                <li>Introduce to your kids the World Natural Wonders – Halong Bay with lots of holiday activities: swimming, relaxing, kayaking,...</li>
                                <li>Enjoy Hoi An biking trip to rural villages to join a mini cooking class at a local family house and have fun with basket boat ride along Bay Mau water coconut forest</li>
                                <li>Explore My Son Sanctuary, the ancient ruins of Cham Empire and also the UNESCO World Heritage Site in South-Central Vietnam</li>
                                <li>Get kids involved in a history lesson at the legend Cu Chi tunnels system</li>
                                <li>Immerse in the vibrant ambience of Saigon at night by Vespa motorbikes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div> );
}

export default TravelInfo;