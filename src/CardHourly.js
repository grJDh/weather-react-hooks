import React from 'react';

import Weather from './Weather';
import DayWeek from './DayWeek';

const CardHourly = props => {

  if (props.choosenDay) {
    console.log(props.weatherHourly);
    return (
      <div className='flex flex-column ma2 pa2 br3 w-70 items-center bg-near-white shadow-5'>
        <DayWeek day={props.choosenDay.day} dayDate={props.choosenDay.dayDate}/>
      
        <div className='flex flex-wrap justify-around items-center w-90'>
          {props.weatherHourly.map((entry, i) => {
            const hour = new Date(entry.dt_txt);
            return <Weather
                    temp={Math.round(entry.main.temp)}
                    weather={entry.weather[0].main}
                    time={hour.getHours()}
                    key={i}
                    />
          })}
        </div>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default CardHourly;