
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
          <img className='au-img' src='https://th.bing.com/th/id/R.8b040e1db190fa0e5850486d7634cb26?rik=mdk%2bRGJBZxz%2bJQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8Txrx4LRc.jpg&ehk=IZp9PoYzTYrYOWfxgMGaSuzbQx5AY4YfhL8YFy8tvMk%3d&risl=&pid=ImgRaw&r=0'/>
          </div>
      </div>
  );
};

export default AboutUs;
