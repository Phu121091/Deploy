
import React from 'react';
import { useState } from 'react';
import './AboutUs.css';
import {Link} from 'react-router-dom';

const AboutUs = () => {

  return (
      <div className="aboutus" >
        <div className='au-title'>
          <h1 className='au-h1'>About Us</h1>  
        </div>
        <div className='au-main'>
          <img className='au-img' src='https://th.bing.com/th/id/R.8b040e1db190fa0e5850486d7634cb26?rik=mdk%2bRGJBZxz%2bJQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8Txrx4LRc.jpg&ehk=IZp9PoYzTYrYOWfxgMGaSuzbQx5AY4YfhL8YFy8tvMk%3d&risl=&pid=ImgRaw&r=0'alt=''/>
          <div className='au-exceptional'>
            <h3>Exceptional Knowledge & Attention to Detail</h3>
            <p className='au-p'>We are proud to be the branch company specialized in organizing in Indochina under Voyages Saigon – a travel company that was born and operated in the 1980s and officially brought the brand to customers in 1991. Voyages Saigon serves Serving delegations from North America, Canada with extremely selected and designed products to most destinations around the world.
            </p>
          </div>
          <div className='au-reliable'>
            <h3>Reliable and Trustworthy</h3>
            <p className='au-p'>Mr. Dennis Chinh, the founder of Voyages Saigon, has two Vietnamese and French bloodlines. 
              He settled in the United States in the 1970s, graduated from Oriental Culture and worked at Unesco. 
              Because of those facilities, Dennis has an endless love and passion for culture, especially Oriental culture. 
              He has had in-depth cultural studies with the lands he has visited. 
              Partnering with Dennis is Tony Nguyen, a Vietnamese native tourist with 30 years of experience throughout Indochina. 
              These two people have created VNXpedia, a product full of passion and innovation VNXpedia focuses on programs and products in mystical Indochina. 
              Strengthened by community-oriented, environmentally responsible and local elements. Core values ​​in the company's products are culture and environment, community. 
              The products are carefully surveyed and performed delicately - so that each customer when on the tour can feel the difference and uniqueness.</p>
          </div>
          <div className='au-plan'>
            <h3>Well Planned and High Quality Tours</h3>
            <p className='au-p'>Going a step further – VNXpedia is a reliable address in designing specialized programs, unique niche products in its diverse product range. 
              These can be mentioned product brands MICE, Wellness, Luxury, Heritage, etc., which VNXpedia has prepared and successfully implemented for many big customers in almost all countries.</p>
          </div>
          <Link to='/'>See more...</Link>
        </div>
      </div>
  );
};

export default AboutUs;
