import React from 'react';
import './style.css';
import IMG from '../../../data/images/banner/16.jpg';
import {AiOutlineCheck} from 'react-icons/ai';

const Hot = ({data}) => {
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
        <div className='hot-box hot1'>
          <img src={IMG}/>
          <h1 className='title-before'>{data[0].title}</h1>
          <div className='main-hotbox'>

          <h1 className='title-after'>{data[0].title}</h1>
          <div>
          <div><AiOutlineCheck className='rs-ic'/>Country: {data[0].country.map(d=><span>{d} </span> )} </div>
          <div><AiOutlineCheck className='rs-ic'/>{data[0].itinerary.length} days</div>
          <div><AiOutlineCheck className='rs-ic'/>{data[0].price} $</div>
          <div><AiOutlineCheck className='rs-ic'/>Date : {data[0].date.start}</div>
          </div> 
          </div>
          </div>
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