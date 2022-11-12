import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './Review.css';

const Review = () => {
   
    const contentStyle = {
        height: '400px',
        color: '#fff',
        lineHeight: '400px',
        textAlign: 'center',
    }

  return (
    <div className='review'>
      <h1>Review and feedback</h1>
      <div className='review-main'>
        <div className='review-img'>
          <img src='https://th.bing.com/th/id/OIP.XqO6cETFqVBVcTHoDrdybAHaIs?pid=ImgDet&rs=1'/>
        </div>
        <p>" Một chuyến đi tuyệt vời , trải nghiệm thú vị và vô cùng mới mẻ , tôi nhất đinh sẽ quay trở lại nơi đây"</p>
      </div>
      

    </div>
  )
}

export default Review