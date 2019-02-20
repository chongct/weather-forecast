import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Forecast from './Forecast';

class Weather extends Component {
  render() {
    // console.log(this.props);
    let { result, forecast } = this.props.data.apiQuery;
    let weatherForecast = forecast.map(day => <Forecast day={day} key={day.time}/>);

    let iconResult;
    switch (result.icon) {
      case "clear-day":
        iconResult = "sun";
        break;
      case "clear-night":
        iconResult = "moon";
        break;
      case "rain":
        iconResult = "cloud-rain";
        break;
      case "snow":
        iconResult = "snowflake";
        break;
      case "wind":
        iconResult = "wind";
        break;
      case "cloudy":
        iconResult = "cloud";
        break;
      case "partly-cloudy-day":
        iconResult = "cloud-sun";
        break;
      case "partly-cloudy-night":
        iconResult = "cloud-moon";
        break;
      default:
        iconResult = "not found";
    }
    if (document.querySelector(".location-icon")) {
      document.querySelector(".location-icon").style.transform = `rotate(${(-45 + result.windBearing)}deg)`;
    }

    return (
      <div>
        <p>{ result.summary } now. { result.dailySummary }</p>

        <Row>
          <Col sm="4"><p><FontAwesomeIcon icon={iconResult} className="weather-icons mr-4"/>{ result.temperature }</p></Col>
          <Col sm="4"><p><FontAwesomeIcon icon="tint" className="mr-4"/>{ parseFloat(result.precipProbability)*100 }%</p></Col>
          <Col sm="4"><p><FontAwesomeIcon icon="location-arrow" className="location-icon mr-4"/>{ result.windSpeed } m/s</p></Col>
        </Row>

        <Row className="forecast-group">
          { weatherForecast }
        </Row>
      </div>
    );
  }
}

export default Weather;
