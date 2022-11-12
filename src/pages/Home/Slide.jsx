import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './Slide.css';

const contentStyle = {
    height: '700px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
}

const SlideBig = () => {
  return (
    <Carousel effect="fade" autoplay duration='5s'>
    <div>
      <div style={contentStyle} className='slide-item1'></div>
    </div>
    <div>
      <div style={contentStyle} className='slide-item2'></div>
    </div>
    <div>
      <div style={contentStyle} className='slide-item3'></div>
    </div>
    <div>
      <div style={contentStyle} className='slide-item4'></div>
    </div>
    <div>
      <div style={contentStyle} className='slide-item5'></div>
    </div>
  </Carousel>
  )
}

export default SlideBig