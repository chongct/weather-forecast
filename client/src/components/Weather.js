import React, { Component } from 'react';

import Forecast from './Forecast'

class Weather extends Component {

  render() {
    // console.log(this.props)
    let { result, forecast } = this.props.data.apiQuery
    let weatherForecast = forecast.map(day => <Forecast day={day} key={day.time}/>)

    return (
      <div>
        <p>{ result.temperature }</p>
        <p>{ result.summary }</p>

        <div>{ weatherForecast }</div>
      </div>
    );
  }
}

export default Weather;
