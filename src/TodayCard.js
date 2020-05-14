import React from 'react';

import Weather from './Weather';
import DayWeek from './DayWeek';

const TodayCard = props => {

  return (
    <div className='flex flex-column ma2 pa2 br3 justify-between w-70 items-center bg-near-white shadow-5 h5'>
      <DayWeek props={props}/>
    
      <div className='flex justify-around w-100'>
        <div className='flex flex-column'>
          <Weather props={props}/>
        </div>

        {/* <div className='flex flex-column'>
          <i className="wi wi-owm-202 f-headline"></i>
          <div className='flex justify-between w-90'>
            <h3>{props.minTemp}</h3>
            <h3>{props.maxTemp}</h3>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TodayCard;
