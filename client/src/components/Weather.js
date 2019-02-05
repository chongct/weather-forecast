import React, { Component } from 'react';
import { Row } from 'reactstrap';

import Forecast from './Forecast';

class Weather extends Component {

  render() {
    // console.log(this.props);
    let { result, forecast } = this.props.data.apiQuery;
    let weatherForecast = forecast.map(day => <Forecast day={day} key={day.time}/>);

    return (
      <div>
        <p>{ result.summary } now. { result.dailySummary }</p>
        <p>{ result.temperature }</p>
        <p>{ parseFloat(result.precipProbability)*100 }</p>
        <p>{ result.windSpeed }</p>

        <Row className="forecast-group">
          { weatherForecast }
        </Row>
      </div>
    );
  }
}

export default Weather;
