import React from "react";
import './TravelStyle.css';
import TourItemlist from '../../components/TourItemlist/TourItemlist';
import { useParams } from 'react-router-dom';
import Style from '../../data/stylelist.json';
import Datalist from '../../data/tourlist.json';


const Tourlist = () => {  
    const param = useParams();
    console.log(param.id);
    const Styleload =Style.find((d)=>d.title==param.id);
    console.log(Styleload);
    const Renderlist = Datalist.filter((d)=>d.style==param.id);


  return (
    <div className="body-classic">
      <div className="banner-picture">
        <div className="title-travelstyle">{Styleload.title}</div>
        {/* <div className="detail-travelstyle"> Việt Nam - Timeless Charm </div> */}
      </div>
      <div className="are-main">
      <div className="page-up">
          <div className="title-top"> See The World Together</div>
          <div className="middle-page"> 
          {Styleload.content}
          </div>
          <div className="end-page"> Look By Eyes- Feel By Heart </div>
        </div>
        
        
            {Renderlist.map((d,index)=>(index=0||index%2==0)?<TourItemlist data={d} status='rev'/>:<TourItemlist data={d} status='norev'/>)}
            
            
        {/* <TourItemlist status='rev'/>
        <TourItemlist status='norev'/>
        <TourItemlist status='rev'/>
        <TourItemlist status='norev'/> */}
      
      </div>
    </div>
  );
};

export default Tourlist;
