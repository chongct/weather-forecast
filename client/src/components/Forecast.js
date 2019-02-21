import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'reactstrap';

class Forecast extends Component {

  render() {
    // console.log(this.props);
    let { time, summary, icon, temperatureMin, temperatureMax } = this.props.day;
    let date = new Date(time * 1000);
    const dayOfWeekArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let dayOfWeek = dayOfWeekArray[date.getDay()];
    let displayDate = `${date.getDate()}/${date.getMonth() + 1}`;
    let iconResult;
    switch (icon) {
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
        iconResult = "question";
    }

    return (
      <Col sm="2" className="forecast-days d-flex flex-column align-items-center justify-content-between">
        <p>{ dayOfWeek } {displayDate}</p>
        <FontAwesomeIcon icon={iconResult} className="weather-icons"/>
        <p>{ summary }</p>
        <p>{ Math.round(temperatureMax) }&#8451; / { Math.round(temperatureMin) }&#8451;</p>
      </Col>
    );
  }
}

export default Forecast;
