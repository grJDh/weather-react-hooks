import React from 'react';

import Weather from './Weather';
import DayWeek from './DayWeek';

const Card = props => {

  return (
    <div onClick={() => {props.chooseDay({dayDate: props.dayDate, day:props.day})}} className='flex flex-column ma2 pa2 br3 justify-between w5 items-center grow pointer bg-near-white shadow-5'>
      <DayWeek day={props.day} dayDate={props.dayDate}/>
      <Weather weather={props.weather} temp={props.temp} />
    </div>
  );
}

export default Card;