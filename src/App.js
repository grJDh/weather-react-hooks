import React, { useState, useEffect } from 'react';

import Card from './Card';
import SearchBox from './SearchBox';
import CardHourly from './CardHourly';

import './css/Card.css';
import './font/Merriweather-Regular.ttf';
import './css/weather-icons.min.css';

const App = () => {

  const weatherInitial = [];

  const [weather, setWeather] = useState(weatherInitial);

  const [city, setCity] = useState('???');
  const startCity = 'Moscow';

  const [cityFound, setCityFound] = useState(true);

  const [choosenDay, setChoosenDay] = useState(0);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + startCity + '&appid=2c9dc6f2bedb657466b0cab93ce56dc6&units=metric')
      .then(response => response.json())
      .then(weatherJSON => setWeather(weatherJSON));
  }, []);

  useEffect(() => {
    if (weather.city) {
      setCity(weather.city.name);
    }
  }, [weather]);

  const updateCity = (event) => {
    if (event.key === 'Enter') {
      fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + event.target.value + '&appid=2c9dc6f2bedb657466b0cab93ce56dc6&units=metric')
        .then(response => response.json())
        .then(weatherJSON => {
          if (weatherJSON.cod === '404') {
            setCityFound(false);
          } else {
            setCityFound(true);
            setWeather(weatherJSON);
          }
          
        });
    }
  }

  const chooseDay = (day) => {
    console.log(day);
    setChoosenDay(day);
  }

  const timeNow = new Date();

  if (weather.list) {
    return (
      <div>
        <h1 className='tc font-mw f-subheadline-ns lh-title normal'>Weather Forecast</h1>
        <h3 className='tc f4 lh-copy'>{city}</h3>
        <SearchBox startCity={startCity} updateCity={updateCity}/>

        {(!cityFound) && <h3 className='tc f4 lh-copy red'>City not found</h3>}

        <div className='flex justify-center flex-column items-center'>
          <div className='flex flex-wrap justify-center'>
            {(timeNow.getHours() > 12) &&
              <Card day={timeNow.getDay()}
              dayDate={timeNow.getDate()}
              temp={Math.round(weather.list[0].main.temp)}
              weather={weather.list[0].weather[0].main}
              chooseDay={chooseDay}
              />
            }

            {weather.list.filter((day) => {
              const time = new Date(day.dt_txt);
              if ((time.getHours()) === 12) {
                console.log(day);
                return day;
              }
            }).map((thisDay, i) => {
              const today = new Date(thisDay.dt_txt);
              return <Card 
                      day={today.getDay()}
                      dayDate={today.getDate()}
                      temp={Math.round(thisDay.main.temp)}
                      weather={thisDay.weather[0].main}
                      chooseDay={chooseDay}
                      key={i}
                    />
            })}
          </div>
          <CardHourly
            choosenDay={choosenDay}
            weatherHourly={weather.list.filter((entry) => {
              const time = new Date(entry.dt_txt);
              if ((time.getDate()) === choosenDay.dayDate) {
                return entry;
              }
              })}
          />
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
