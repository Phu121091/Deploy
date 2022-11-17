import React from 'react';
import './style.css';

const TouritemBook = ({data,onClick}) => {
  return (
    <div className='touritembook' onClick={()=>onClick(data)}>
        <h1>{data.title}</h1>
    </div>
  )
}

export default TouritemBook