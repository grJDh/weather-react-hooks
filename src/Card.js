import React from 'react';

import Weather from './Weather';
import DayWeek from './DayWeek';

const Card = props => {

  return (
    <div className='flex flex-column ma2 pa2 br3 justify-between w5 items-center bg-near-white grow pointer shadow-5 h5'>
      <DayWeek props={props}/>
      <Weather props={props}/>
    </div>
  );
}

export default Card;
