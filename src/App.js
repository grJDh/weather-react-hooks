import React, { useState, useEffect } from 'react';
import Card from './Card';

import './css/Card.css';
import './font/Merriweather-Regular.ttf';
import './css/weather-icons.min.css';
import TodayCard from './TodayCard';

const App = () => {

  const weatherInitial = [];

  const [weather, setWeather] = useState(weatherInitial);

  const [city, setCity] = useState('???');

  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2c9dc6f2bedb657466b0cab93ce56dc6&lang=ru')
      .then(response => response.json())
      .then(weatherJSON => {
        setWeather(weatherJSON);
      });
  }, []);

  useEffect(() => {
    if (weather.city) {
      setCity(weather.city.name);
        console.log(weather.list)
    }
  }, [weather]);

  if (weather.list) {
    const today = new Date(weather.list[0].dt_txt);
    return (
      <div>
        <h1 className='tc font-mw f-subheadline lh-title normal'>Прогноз погоды</h1>
        <h3 className='tc f4 lh-copy'>{city}</h3>
  
        <div className='flex flex-wrap justify-center'>
          <TodayCard day={today.getDay()}
                     minTemp={Math.round(weather.list[0].main.temp_min)-272}
                     maxTemp={Math.round(weather.list[0].main.temp_max)-272}
                     weather={weather.list[0].weather[0].main}
          />
        </div>
  
        {/* <div className='flex flex-wrap justify-center'>
          {weather.list.map(thisDay => {
            return <Card day={day} />
          })}
        </div> */}
      </div>
    );
  } else {
    return (
      <h1 className='tc font-mw f-subheadline lh-title normal'>Loading...</h1>
    );
  }

  
}

export default App;
