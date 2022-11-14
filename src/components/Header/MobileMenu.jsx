import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({showmobile}) => {

  const [listmb,setlistmb] = useState(['0px','0px','0px','0px','0px']);
  const Showlistmb1 = () => {listmb[0]=='20px'?setlistmb(['0px','0px','0px','0px','0px']):setlistmb(['20px','0px','0px','0px','0px'])};
  const Showlistmb2 = () => {listmb[1]=='20px'?setlistmb(['0px','0px','0px','0px','0px']):setlistmb(['0px','20px','0px','0px','0px'])};
  const Showlistmb3 = () => {listmb[2]=='20px'?setlistmb(['0px','0px','0px','0px','0px']):setlistmb(['0px','0px','20px','0px','0px'])};
  const Showlistmb4 = () => {listmb[3]=='20px'?setlistmb(['0px','0px','0px','0px','0px']):setlistmb(['0px','0px','0px','20px','0px'])};
  const Showlistmb5 = () => {listmb[4]=='20px'?setlistmb(['0px','0px','0px','0px','0px']):setlistmb(['0px','0px','0px','0px','20px'])};

  return (
    <div className="menu-mobile" style={{right:`${showmobile}`}}>
        <p className="title-mobile" onClick={()=>Showlistmb1()}>Destination</p>
        <div className="des-list-mobile">
          <Link to='/Destination/Vietnam' style={{height:`${listmb[0]}`}}>Vietnam</Link>
          <Link to='/Destination/Lao' style={{height:`${listmb[0]}`}}>Lao</Link>
          <Link to='/Destination/Thailan' style={{height:`${listmb[0]}`}}>Thailan</Link>
          <Link to='/Destination/Campuchia'style={{height:`${listmb[0]}`}}>Campuchia</Link>
        </div>
        <p className="title-mobile" onClick={()=>Showlistmb2()}>Travel Style</p>
        <div className="style-list-mobile">
        <Link to='/Classic' style={{height:`${listmb[1]}`}}>CLASSIC</Link>
        <Link to='/Family' style={{height:`${listmb[1]}`}}>FAMILY</Link>
        <Link to='/Beach' style={{height:`${listmb[1]}`}}>BEACH</Link>
        <Link to='Short trip' style={{height:`${listmb[1]}`}}>SHORT TRIPS</Link>
        <Link to='Culinary' style={{height:`${listmb[1]}`}}>CULINARY</Link>
        <Link to='Adventure' style={{height:`${listmb[1]}`}}>ADVENTURE</Link>
        <Link to='Cruise' style={{height:`${listmb[1]}`}}>CRUISES</Link>
        </div>
        <p className="title-mobile" onClick={()=>Showlistmb3()}>Special Deals</p>
        <div className="special-list-mobile">
        <Link to='/Golf' style={{height:`${listmb[2]}`}}>GOLF</Link>
        <Link to='/Welles' style={{height:`${listmb[2]}`}}>WELLES</Link>
        <Link to='/Mice' style={{height:`${listmb[2]}`}}>M.I.C.E</Link>
        <Link to='/Luxury' style={{height:`${listmb[2]}`}}>LUXURY</Link>
        <Link to='/Heritage' style={{height:`${listmb[2]}`}}>HERITAGES</Link>
        <Link to='/Reponsible' style={{height:`${listmb[2]}`}}>REPONSIBLE TRAVEL</Link>
        </div>
        <p className="title-mobile" onClick={()=>Showlistmb4()}>About</p>
        <div className="about-list-mobile">
        <Link to='/AboutUs' style={{height:`${listmb[3]}`}}>ABOUT US</Link>
        <Link to='/Policy' style={{height:`${listmb[3]}`}}>POLICY</Link>
        <Link to='/Privacy' style={{height:`${listmb[3]}`}}>PRIVACY</Link>
        <Link to='/Payment' style={{height:`${listmb[3]}`}}>PAYMENT GATEWAY</Link>
        <Link to='/Affiliates' style={{height:`${listmb[3]}`}}>AFFILIATES</Link>
        </div>
        <p className="title-mobile" onClick={()=>Showlistmb5()}>News</p>
        <div className="news-list-mobile">
        <Link to='/Blog' style={{height:`${listmb[4]}`}}>BLOG</Link>
        <Link to='/Feedback' style={{height:`${listmb[4]}`}}>FEEDBACK</Link>
        </div>
      </div>
    
  )
}

export default MobileMenu