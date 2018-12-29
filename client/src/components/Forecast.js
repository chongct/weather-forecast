import React, { Component } from 'react';

class Forecast extends Component {

  render() {
    console.log(this.props)
    let { time, summary, temperatureMin, temperatureMax } = this.props.day
    let date = new Date(time * 1000)
    const dayOfWeekArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    let dayOfWeek = dayOfWeekArray[date.getDay()]

    return (
      <div>
        <p>{ dayOfWeek } - { summary }</p>
      </div>
    );
  }
}

export default Forecast;
