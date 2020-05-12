import React from 'react';

const Card = props => {

  return (
    <div className='flex flex-column ma2 pa2 ba bw1 items-center'>
      <h2>{props.day}</h2>
      
      <div className='flex justify-around w4'>
        <h3>{props.minTemp}</h3>
        <h3>{props.maxTemp}</h3>
      </div>
    </div>
  );
}

export default Card;
