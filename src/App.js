import React, { useState } from 'react';
import Card from './Card';

const App = () => {

  const weatherInitial = [
    { day:'Среда', minTemp:12, maxTemp:21, weather:'sunny' },
    { day:'Четверг', minTemp:11, maxTemp:17, weather:'cloudy' },
    { day:'Пятница', minTemp:6, maxTemp:13, weather:'clear' },
    { day:'Суббота', minTemp:11, maxTemp:17, weather:'cloudy' },
    { day:'Воскресенье', minTemp:11, maxTemp:17, weather:'cloudy' },
  ];

  const [weather, setWeather] = useState(weatherInitial);

  return (
    <div>
      <h1 className='tc font-mw f-subheadline lh-title normal'>Прогноз погоды</h1>

      <div className='flex flex-wrap w-100 justify-center'>
        {weather.map(thisDay => (<Card day={thisDay.day} minTemp={thisDay.minTemp} maxTemp={thisDay.maxTemp} weather={thisDay.weather}/>))}
      </div>
    </div>
  );
}

export default App;
// api.openweathermap.org/data/2.5/forecast?id={1500933}&appid={2c9dc6f2bedb657466b0cab93ce56dc6}