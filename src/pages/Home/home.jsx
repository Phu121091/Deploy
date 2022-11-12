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
const Home = () => {
  
//   const [sellList, setSellList] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//   const callApi =async()=>{
//     setIsLoading(true);

//      const response = await axios({
//          method: 'POST',
//          url: 'https://dieuhanh.vatco.vn/MobileLogin/GetFullText?id=3925',
//          type: 'json'
//      });
  
//      if(response.status === 200){
//       setSellList(response.data);
//   }
//   console.log(sellList);
//   setIsLoading(false);     
// }
// useEffect(()=>{
//   callApi();    
  
// },[]);
// console.log(sellList);

  return (
    <div> 
 {/* Slide head  */}
        <div className="slide-container">
          <SlideBig/>
        </div>

      <Hot/>
      <AboutUs/>
      <SuggestTour />
      <Plus/>
      <SpecialTour />
      <Review/>
      <Feedback/>
      <Bloglist/>
      <Slogan/>
      <Whychoose/>
      
    </div>
  )
}

export default Home