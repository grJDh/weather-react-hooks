import React from 'react';

const Card = props => {

  return (
    <div className='flex flex-column ma2 pa2 br3 justify-between w5 items-center bg-near-white grow pointer shadow-5 h5'>
      <h2>{props.day}</h2>
      
      <div className='flex justify-between w-90'>
        <h3>{props.minTemp}</h3>
        <h3>{props.maxTemp}</h3>
      </div>
    </div>
  );
}

export default Card;
