import React from 'react';

const Weather = props => {

  const weatherIcon = () => {
    switch(props.props.weather.toLowerCase()) {
      case 'clouds':
          return 'wi-cloudy';
      case 'thunderstorm':
        return 'wi-owm-200';
      case 'lightning':
        return 'wi-owm-210';
      case 'sprinkle':
        return 'wi-owm-300';
      case 'rain':
        return 'wi-owm-302';
      case 'rain-mix':
        return 'wi-owm-310';
      case 'showers':
        return 'wi-owm-313';
      case 'storm-showers':
        return 'wi-owm-531';
      case 'snow':
        return 'wi-owm-600';
      case 'day-haze':
        return 'wi-owm-721';
      case 'smoke':
        return 'wi-owm-711';
      case 'dust':
        return 'wi-owm-731';
      case 'fog':
        return 'wi-owm-741';
      case 'cloudy-gusts':
        return 'wi-owm-771';
      case 'tornado':
        return 'wi-owm-781';
      case 'day-sunny':
        return 'wi-owm-800';
      case 'cloudy':
        return 'wi-owm-804';
      case 'hurricane':
        return 'wi-owm-902';
      case 'snowflake-cold':
        return 'wi-owm-903';
      case 'hot':
        return 'wi-owm-904';
      case 'windy':
        return 'wi-owm-905';
      case 'hail':
        return 'wi-owm-906';
      case 'strong-wind':
        return 'wi-owm-957';
      case 'day-sunny':
        return 'wi-owm-800';
      default:
        return 'wi-alien';
    }
  }

  return (
    <div className='flex justify-between flex-column items-center'>
      <i className={`${weatherIcon()} wi f-headline ma2`}></i>
      <h3>{props.props.temp}°</h3>
    </div>
  );
}

export default Weather;
