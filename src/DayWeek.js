import React from 'react';

const DayWeek = props => {

  const dayOfTheWeek = () => {
    const timeNow = new Date();

    switch(props.day) {
      case timeNow.getDay():
        return 'Today';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 0:
        return 'Sunday';
      default:
        return '???';
    }
  }

  console.log(props);

  return (
    <div>
      <h2>{dayOfTheWeek()}, {props.dayDate}</h2>
    </div>
  );
}

export default DayWeek;
