import React, { useState, useEffect } from 'react';
import Card from './Card';

import './css/Card.css';
import './font/Merriweather-Regular.ttf';
import './css/weather-icons.min.css';

const App = () => {

  const weatherInitial = [];

  const [weather, setWeather] = useState(weatherInitial);

  const [city, setCity] = useState('???');

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2c9dc6f2bedb657466b0cab93ce56dc6')
      .then(response => response.json())
      .then(weatherJSON => {
        setWeather(weatherJSON);
      });
  }, []);

  useEffect(() => {
    if (weather.city) {
      setCity(weather.city.name);
    }
  }, [weather]);

  const timeNow = new Date();

  if (weather.list) {
    return (
      <div>
        <h1 className='tc font-mw f-subheadline lh-title normal'>Weather forecast</h1>
        <h3 className='tc f4 lh-copy'>{city}</h3>

        <div className='flex flex-wrap justify-center'>
        {(Date().getHours() > 12) && <Card day={Date().getDay()} temp={Math.round(weather.list[0].main.temp)-272} weather={weather.list[0].weather[0].main} />}

          {weather.list.filter((day) => {
            const time = new Date(day.dt_txt);
            if ((time.getHours()) === 12) {
              return day;
            }
          }).map((thisDay, i) => {
            const today = new Date(thisDay.dt_txt);
            return <Card 
                    day={today.getDay()}
                    temp={Math.round(thisDay.main.temp)-272}
                    weather={thisDay.weather[0].main}
                    key={i}
                   />
          })}
        </div>
      </div>
    );
  } else {
    return (
      <h1 className='tc font-mw f-subheadline lh-title normal'>Loading...</h1>
    );
  }

  
}

export default App;
