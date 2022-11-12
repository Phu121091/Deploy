import React from 'react';
import WhychooseDefault from './Whychoose.style';
import './Whychoose.css';
import Video1 from '../../../data/video/1.mp4';
import Video2 from '../../../data/video/1.mp4';

const Whychoose = () => {
  return (
    <div class="banner">
      <video
        src={Video2}
        width="900"
        height="500"
        loop
        autoPlay
        muted
      ></video>
      <div class="noi_dung">
        <h2>Let's Visit Vietnam</h2>
        <p> "VNXpedia - grab your bag, catch our plane !"</p>
        <p>"Leading you from here to beyond."</p>
        <p>"Fly Like A Ceo, Pay Like A Temp."</p>
      </div>
      {/* <div class="video-bg">
        <video
          src={Video1}
          width="900"
          height="500"
          loop
          autoPlay
          muted
        ></video>
      </div> */}
    </div>
  );
};

export default Whychoose;
