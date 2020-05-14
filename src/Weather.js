import React from 'react';

const Weather = props => {

  return (
    <div>
      <i className="wi wi-owm-202 f-headline"></i>
      <div className='flex justify-between w-90'>
        <h3>{props.props.minTemp}</h3>
        <h3>{props.props.maxTemp}</h3>
      </div>
    </div>
  );
}

export default Weather;
