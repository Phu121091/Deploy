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
            <img src={IMG} alt=''/>
            <h1 className='title-before'>{data[0].title}</h1>
            <div className='main-hotbox'>
              <h1 className='title-after'>{data[0].title}</h1>
              <div className='hot-tour--content'>
                <div><AiOutlineCheck className='rs-ic'/>Country:&nbsp;{data[0].country.map(d=><span>{d}&nbsp; </span> )} </div>
                <div><AiOutlineCheck className='rs-ic'/>Duration: {data[0].itinerary.length} days</div>
                <div><AiOutlineCheck className='rs-ic'/>Date: {data[0].date.start} - {data[0].date.end}</div>
                <div><AiOutlineCheck className='rs-ic'/>Price: {data[0].price} $</div>
              </div> 
            </div>
          </div>
          <div className='hot-box hot2'>
            <img src={IMG} alt=''/>
            <h1 className='title-before'>{data[1].title}</h1>
            <div className='main-hotbox'>
              <h1 className='title-after'>{data[1].title}</h1>
              <div className='hot-tour--content'>
                <div><AiOutlineCheck className='rs-ic'/>Country:&nbsp;{data[1].country.map(d=><span>{d}&nbsp; </span> )} </div>
                <div><AiOutlineCheck className='rs-ic'/>Duration: {data[1].itinerary.length} days</div>
                <div><AiOutlineCheck className='rs-ic'/>Date: {data[1].date.start} - {data[1].date.end}</div>
                <div><AiOutlineCheck className='rs-ic'/>Price: {data[1].price} $</div>
              </div> 
            </div>
          </div>
        </div>
        <div className='hot-grid2'>
          <div className='hot-box hot3'>
            <img src={IMG} alt=''/>
            <h1 className='title-before'>{data[2].title}</h1>
            <div className='main-hotbox'>
              <h1 className='title-after'>{data[2].title}</h1>
              <div className='hot-tour--content'>
                <div><AiOutlineCheck className='rs-ic'/>Country:&nbsp;{data[2].country.map(d=><span>{d}&nbsp; </span> )} </div>
                <div><AiOutlineCheck className='rs-ic'/>Duration: {data[2].itinerary.length} days</div>
                <div><AiOutlineCheck className='rs-ic'/>Date: {data[2].date.start} - {data[2].date.end}</div>
                <div><AiOutlineCheck className='rs-ic'/>Price: {data[2].price} $</div>
              </div> 
            </div>
          </div>
          <div className='hot-box hot4'>
            <img src={IMG} alt=''/>
            <h1 className='title-before'>{data[3].title}</h1>
            <div className='main-hotbox'>
              <h1 className='title-after'>{data[3].title}</h1>
              <div className='hot-tour--content'>
                <div><AiOutlineCheck className='rs-ic'/>Country:&nbsp;{data[3].country.map(d=><span>{d}&nbsp; </span> )} </div>
                <div><AiOutlineCheck className='rs-ic'/>Duration: {data[3].itinerary.length} days</div>
                <div><AiOutlineCheck className='rs-ic'/>Date: {data[3].date.start} - {data[3].date.end}</div>
                <div><AiOutlineCheck className='rs-ic'/>Price: {data[3].price} $</div>
              </div> 
            </div>
          </div>
          <div className='hot-box hot5'>
            <img src={IMG} alt=''/>
            <h1 className='title-before'>{data[4].title}</h1>
            <div className='main-hotbox'>
              <h1 className='title-after'>{data[4].title}</h1>
              <div className='hot-tour--content'>
                <div><AiOutlineCheck className='rs-ic'/>Country:&nbsp;{data[4].country.map(d=><span>{d}&nbsp; </span> )} </div>
                <div><AiOutlineCheck className='rs-ic'/>Duration: {data[4].itinerary.length} days</div>
                <div><AiOutlineCheck className='rs-ic'/>Date: {data[4].date.start} - {data[4].date.end}</div>
                <div><AiOutlineCheck className='rs-ic'/>Price: {data[4].price} $</div>
              </div> 
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hot