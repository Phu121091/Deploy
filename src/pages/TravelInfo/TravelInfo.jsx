import { BsCheck2, BsFillTreeFill, BsHeart, BsPeopleFill } from 'react-icons/bs';
import { MdFoodBank, MdKayaking, MdKeyboardArrowDown } from 'react-icons/md';
import {BiMap, BiSwim, BiCircle, BiTransfer} from 'react-icons/bi';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'
import {RiHotelBedFill} from 'react-icons/ri'
import {FaBed, FaImages, FaPlane} from 'react-icons/fa'
import {IoIosAdd} from 'react-icons/io'
import {AiOutlineMail, AiOutlineDown, AiFillCar, AiFillBank} from 'react-icons/ai'
import {HiOutlineMinus} from 'react-icons/hi'
import './TravelInfo.css';
import { GiCruiser, GiCultist, GiPagoda, GiSpeedBoat } from 'react-icons/gi';
import TravelDetail from './TravelDetail/TravelDetail'

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
        <div className="tour-address">
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
                <h2 className="inclusions-line">INCLUSIONS OF THIS TOUR</h2>
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
                <TravelDetail/>
                <div className="tour-highlights">   
                    <h2 className="highlight-line">HIGHLIGHTS OF THIS TOUR</h2>
                    <div className='hightlight-content'>
                        <div className="tour-intro">
                            <img src="https://d2lwt6tidfiof0.cloudfront.net/uploads/slide/vietnam-cambodia-family-tour-2-1530003157.jpg" alt="" />
                            <img src="https://d2lwt6tidfiof0.cloudfront.net/uploads/slide/vietnam-cambodia-family-tour-2-1530003157.jpg" alt="" />
                        </div>
                        <div className="tour-highlight">
                            <ul>
                                <li><BsCheck2 className='tour-highlight-check'/>Have great family moments with water puppet show and cyclo ride in Hanoi capital</li>
                                <li><BsCheck2 className='tour-highlight-check'/>Introduce to your kids the World Natural Wonders – Halong Bay with lots of holiday activities: swimming, relaxing, kayaking,...</li>
                                <li><BsCheck2 className='tour-highlight-check'/>Enjoy Hoi An biking trip to rural villages to join a mini cooking class at a local family house and have fun with basket boat ride along Bay Mau water coconut forest</li>
                                <li><BsCheck2 className='tour-highlight-check'/>Explore My Son Sanctuary, the ancient ruins of Cham Empire and also the UNESCO World Heritage Site in South-Central Vietnam</li>
                                <li><BsCheck2 className='tour-highlight-check'/>Get kids involved in a history lesson at the legend Cu Chi tunnels system</li>
                                <li><BsCheck2 className='tour-highlight-check'/>Immerse in the vibrant ambience of Saigon at night by Vespa motorbikes</li>
                            </ul>
                            <span>Read more ...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="detail-itinerary">
            <h2 className="itinerary-line">DETAILED ITINERARY</h2>
            <div className="itinerary-contents">
                <div className="itinerary-options">
                    <div className="option-expand">
                        <IoIosAdd className='expand'/>
                        <span>Expand All</span>
                    </div>
                    <div className="option-collapse">
                        <HiOutlineMinus className='minus'/>
                        <span>Collapse All</span>
                    </div>
                </div>
                <div className="itinderary-days">
                    <div className="itinderary-days">
                        <ul className='days-list'>
                            <li>
                                <div className="day-tour">
                                    <a href="#!">
                                        {/* <span>
                                            <BiCircle />
                                        </span> */}
                                        <h3>Day 1: Ha Noi</h3>
                                        <button>
                                            <AiOutlineDown />
                                        </button>
                                    </a>
                                </div>
                                <div className="dayTour-content active">
                                    <div className="day-transfer">
                                        <div className='transfer-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Transfer: <AiFillCar className='transfer-icon'/></span>
                                        </div>

                                    </div>
                                    <div className="day-activity">
                                        <div className="activity-header">
                                            <AiFillBank className='content-icon'/>
                                            <span>Activities: <b>Arrive in Hanoi, Watch Water Puppet Show, Enjoy Welcome Dinner at local restaurant</b></span>
                                        </div>
                                        <p>Welcome to Hanoi, the heart of Vietnam which is considered as a blend between the traditional and the modern beauties. 
                                            At Noi Bai Airport, our guide and driver will welcome then take you to your hotel to do check-in. 
                                            After relaxation, our guide will take you walk to the theatre and we will enjoy Water Puppet Show – A traditional art performance of Vietnam. After that, you will enjoy a welcome dinner at local restaurant.
                                            Overnight in Hanoi.</p>
                                    </div>
                                    <div className="day-experiences">
                                        <div className='experiences-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Experiences: </span>
                                        </div>
                                        <div className="experiences-content">
                                            <img src="https://d2lwt6tidfiof0.cloudfront.net/uploads/photo-e/destinations/hanoi/water-puppet-show%20(7)650-388.jpg" alt="" />
                                            <div>
                                                <span>Watching authentic Water Puppet Show in Hanoi</span>
                                                <p>Vietnamese Water Puppet Show is a traditional folk art which dates back several centuries.
                                                    Watching the exceptional show with the puppet moving through water by the skillful puppeters
                                                    will be a special way to discover the ancient art and the countryside stories in your holiday in Hanoi.
                                                    The authentic Vietnamese Water Puppet Show will take you through Southeast Asia’s wet-rice culture,
                                                    a good insight to farming and historical legends with colorful animated puppet and rhythmic melody from traditional instruments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-meal">
                                        <div className='meal-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Meals: <b>Dinner</b></span>
                                        </div>
                                    </div>
                                    <div className="day-accomodation">
                                        <div className='accomodation-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Accomodation: <b>1 Choice</b></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="day-tour">
                                    <a href="#!">
                                        {/* <span>
                                            <BiCircle />
                                        </span> */}
                                        <h3>Day 1: Ha Noi</h3>
                                        <button>
                                            <AiOutlineDown />
                                        </button>
                                    </a>
                                </div>
                                <div className="dayTour-content">
                                    <div className="day-transfer">
                                        <div className='transfer-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Transfer: <AiFillCar className='transfer-icon'/></span>
                                        </div>

                                    </div>
                                    <div className="day-activity">
                                        <div className="activity-header">
                                            <AiFillBank className='content-icon'/>
                                            <span>Activities: <b>Arrive in Hanoi, Watch Water Puppet Show, Enjoy Welcome Dinner at local restaurant</b></span>
                                        </div>
                                        <p>Welcome to Hanoi, the heart of Vietnam which is considered as a blend between the traditional and the modern beauties. 
                                            At Noi Bai Airport, our guide and driver will welcome then take you to your hotel to do check-in. 
                                            After relaxation, our guide will take you walk to the theatre and we will enjoy Water Puppet Show – A traditional art performance of Vietnam. After that, you will enjoy a welcome dinner at local restaurant.
                                            Overnight in Hanoi.</p>
                                    </div>
                                    <div className="day-experiences">
                                        <div className='experiences-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Experiences: </span>
                                        </div>
                                        <div className="experiences-content">
                                            <img src="https://d2lwt6tidfiof0.cloudfront.net/uploads/photo-e/destinations/hanoi/water-puppet-show%20(7)650-388.jpg" alt="" />
                                            <div>
                                                <span>Watching authentic Water Puppet Show in Hanoi</span>
                                                <p>Vietnamese Water Puppet Show is a traditional folk art which dates back several centuries.
                                                    Watching the exceptional show with the puppet moving through water by the skillful puppeters
                                                    will be a special way to discover the ancient art and the countryside stories in your holiday in Hanoi.
                                                    The authentic Vietnamese Water Puppet Show will take you through Southeast Asia’s wet-rice culture,
                                                    a good insight to farming and historical legends with colorful animated puppet and rhythmic melody from traditional instruments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-meal">
                                        <div className='meal-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Meals: <b>Dinner</b></span>
                                        </div>
                                    </div>
                                    <div className="day-accomodation">
                                        <div className='accomodation-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Accomodation: <b>1 Choice</b></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="day-tour">
                                    <a href="#!">
                                        {/* <span>
                                            <BiCircle />
                                        </span> */}
                                        <h3>Day 1: Ha Noi</h3>
                                        <button>
                                            <AiOutlineDown />
                                        </button>
                                    </a>
                                </div>
                                <div className="dayTour-content">
                                    <div className="day-transfer">
                                        <div className='transfer-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Transfer: <AiFillCar className='transfer-icon'/></span>
                                        </div>

                                    </div>
                                    <div className="day-activity">
                                        <div className="activity-header">
                                            <AiFillBank className='content-icon'/>
                                            <span>Activities: <b>Arrive in Hanoi, Watch Water Puppet Show, Enjoy Welcome Dinner at local restaurant</b></span>
                                        </div>
                                        <p>Welcome to Hanoi, the heart of Vietnam which is considered as a blend between the traditional and the modern beauties. 
                                            At Noi Bai Airport, our guide and driver will welcome then take you to your hotel to do check-in. 
                                            After relaxation, our guide will take you walk to the theatre and we will enjoy Water Puppet Show – A traditional art performance of Vietnam. After that, you will enjoy a welcome dinner at local restaurant.
                                            Overnight in Hanoi.</p>
                                    </div>
                                    <div className="day-experiences">
                                        <div className='experiences-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Experiences: </span>
                                        </div>
                                        <div className="experiences-content">
                                            <img src="https://d2lwt6tidfiof0.cloudfront.net/uploads/photo-e/destinations/hanoi/water-puppet-show%20(7)650-388.jpg" alt="" />
                                            <div>
                                                <span>Watching authentic Water Puppet Show in Hanoi</span>
                                                <p>Vietnamese Water Puppet Show is a traditional folk art which dates back several centuries.
                                                    Watching the exceptional show with the puppet moving through water by the skillful puppeters
                                                    will be a special way to discover the ancient art and the countryside stories in your holiday in Hanoi.
                                                    The authentic Vietnamese Water Puppet Show will take you through Southeast Asia’s wet-rice culture,
                                                    a good insight to farming and historical legends with colorful animated puppet and rhythmic melody from traditional instruments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-meal">
                                        <div className='meal-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Meals: <b>Dinner</b></span>
                                        </div>
                                    </div>
                                    <div className="day-accomodation">
                                        <div className='accomodation-header'>
                                            <BiTransfer className='content-icon'/>
                                            <span>Accomodation: <b>1 Choice</b></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="your-choice">
            <h2 className="yourchoice-line">CHOOSE YOUR BEST CHOICE</h2>
            <div className="tour-choices">
                <div className="tour-choice">
                    <div className="tour-option"><p>ECONOMY</p></div>
                    <div className="tour-choice--detail">
                        <ul>
                            <li><FaBed className='icon-choice'/> Hotel (10 nights), Cruise (1 night)</li>
                            <li><FaPlane className='icon-choice'/> Car, Walking, Cruise, Flight ...</li>
                            <li><BsPeopleFill className='icon-choice'/> Private Guide, Driver, Trip Manager</li>
                            <li><MdFoodBank className='icon-choice'/> 11 Breakfasts, 6 Lunches, 4 Dinners</li>
                            <li><FaImages className='icon-choice'/> 17 Unique experiences...</li>
                            <li><BsCheck2 className='icon-choice'/>Entrance fees, excursions, visa, water...</li>
                        </ul>
                    </div>
                    <div className="tour-enquire">
                        <p>ENQUIRE NOW</p>
                    </div>
                </div>
                <div className="tour-choice">
                    <div className="tour-option-re"><p>RECOMMENDED DELUXE</p></div>
                    <div className="tour-choice--detail">
                        <ul>
                            <li><FaBed className='icon-choice'/> Hotel (10 nights), Cruise (1 night)</li>
                            <li><FaPlane className='icon-choice'/> Car, Walking, Cruise, Flight ...</li>
                            <li><BsPeopleFill className='icon-choice'/> Private Guide, Driver, Trip Manager</li>
                            <li><MdFoodBank className='icon-choice'/> 11 Breakfasts, 6 Lunches, 4 Dinners</li>
                            <li><FaImages className='icon-choice'/> 17 Unique experiences...</li>
                            <li><BsCheck2 className='icon-choice'/>Entrance fees, excursions, visa, water...</li>
                        </ul>
                    </div>
                    <div className="tour-enquire-re">
                        <p>ENQUIRE NOW</p>
                    </div>
                </div>
                <div className="tour-choice">
                    <div className="tour-option"><p>LUXURY</p></div>
                    <div className="tour-choice--detail">
                        <ul>
                            <li><FaBed className='icon-choice'/> Hotel (10 nights), Cruise (1 night)</li>
                            <li><FaPlane className='icon-choice'/> Car, Walking, Cruise, Flight ...</li>
                            <li><BsPeopleFill className='icon-choice'/> Private Guide, Driver, Trip Manager</li>
                            <li><MdFoodBank className='icon-choice'/> 11 Breakfasts, 6 Lunches, 4 Dinners</li>
                            <li><FaImages className='icon-choice'/> 17 Unique experiences...</li>
                            <li><BsCheck2 className='icon-choice'/>Entrance fees, excursions, visa, water...</li>
                        </ul>
                    </div>
                    <div className="tour-enquire">
                        <p>ENQUIRE NOW</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="tailormade">
            <div className="tailormade-team">
                <div className="tailormade-img">
                    <img src="https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/a1.webp" alt=''/>
                    <img src="https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/a2.webp"alt=''/>
                    <img src="https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/a3.webp"alt=''/>
                    <img src="https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/a5.webp"alt=''/>
                    <img src="https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/a6.webp"alt=''/>
                    <img src="https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/a8.webp"alt=''/>
                    <div className="tailormade-title">We can customize this tour just for you</div>
                </div>
                <div className="tailormade-contact">
                    <a href="#!">
                        <AiOutlineMail className='tailormade-mail'/>
                        TAILOR MADE & FREE QUOTE FOR THIS TOUR</a>
                </div>
            </div>
        </div>
        
        <div className="contact-yourfriend">
            <h2>Share your friends</h2>
        </div>
    </div> );
}

export default TravelInfo;