import React from 'react';
import { useEffect,useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import './home.css';
import SlideBig from './Slide';
import Whychoose from './Whychoose/Whychoose';
import Hot from './Hot';
import SpecialTour from '../../components/SpecialTour/SpecialTour';
import SuggestTour from '../../components/SuggestTour/SuggestTour';
import AboutUs from './AboutUs/AboutUs';
import Plus from './Plus/Plus';
import Review from './Review/Review';
import Bloglist from './Review/Bloglist/Bloglist';
import Slogan from './Slogan/Slogan';
import Feedback from './Feedback/Feedback';
import Data from '../../data/tourlist.json';

const Home = () => {
  
  return (
    <div> 
 {/* Slide head  */}
        <div className="slide-container">
          <SlideBig/>
        </div>

      <Hot data={Data}/>
      <AboutUs/>
      <SuggestTour />
      <Plus/>
      <SpecialTour />
      {/* <Review/> */}
      {/* <Feedback/>
      <Bloglist/> */}
      <Slogan/>
      <Whychoose/>
      
    </div>
  )
}

export default Home