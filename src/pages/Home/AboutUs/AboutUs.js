
import React from 'react';
import { useState } from 'react';
import './AboutUs.css';
import {Link} from 'react-router-dom';

const AboutUs = () => {

  return (
      <div className="aboutus" >
        <div className='au-title'>
        <h1 className='au-h1'>About Us</h1>  
        <p className='au-p'>We are proud to be the branch company specialized in organizing in Indochina under Voyages Saigon – a travel company that was born and operated in the 1980s and officially brought the brand to customers in 1991. Voyages Saigon serves Serving delegations from North America, Canada with extremely selected and designed products to most destinations around the world.
        </p>
        <Link to='/'>See more...</Link>
        </div>
        
        <div className='au-main'>
          <img className='au-img' src='https://th.bing.com/th/id/OIP.bhS6VJpakSO_f1496NMa2AHaHa?pid=ImgDet&rs=1'/>
          <img className='au-img' src='https://th.bing.com/th/id/OIP.bhS6VJpakSO_f1496NMa2AHaHa?pid=ImgDet&rs=1'/>
          <img className='au-img' src='https://th.bing.com/th/id/OIP.bhS6VJpakSO_f1496NMa2AHaHa?pid=ImgDet&rs=1'/>
          </div>
      </div>
  );
};

export default AboutUs;
