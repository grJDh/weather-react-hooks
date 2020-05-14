import React from 'react';

import Weather from './Weather';
import DayWeek from './DayWeek';

const Card = props => {

  return (
    <div className='flex flex-column ma2 pa2 br3 justify-between w5 items-center grow pointer bg-near-white shadow-5'>
      <DayWeek props={props}/>
      <Weather props={props}/>
    </div>
  );
}

export default Card;