import React from 'react';
import './style.css';
import IMG from '../../../data/images/banner/16.jpg';

const Hot = () => {
  return (
    <div className='hot-tour'>
         <div className='hot-container'>
        <div className="hot-title">HOT TOURS
        <hr className='hr-hot'/>
        </div>
      <p className="hot-main">
      We know that every traveller is different, so our experts have
          meticulously designed different Vietnam touring styles to help you
          explore Vietnam in a way that suits you the best. 
      </p>
      </div>
      <div className='hot-grid'>
        <div className='hot-grid1'>
        <div className='hot-box hot1'><img src={IMG}/></div>
        <div className='hot-box hot2'><img src={IMG}/></div>
        </div>
        <div className='hot-grid2'>
        <div className='hot-box hot3'><img src={IMG}/></div>
        <div className='hot-box hot4'><img src={IMG}/></div>
        <div className='hot-box hot5'><img src={IMG}/></div>
        </div>
      </div>

    </div>
  )
}

export default Hot