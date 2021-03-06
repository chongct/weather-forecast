import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'reactstrap';

import iconKeyword from '../helpers/iconKeyword';

class Forecast extends Component {

  render() {
    // console.log(this.props);
    let { time, summary, icon, temperatureMin, temperatureMax } = this.props.day;
    let date = new Date(time * 1000);
    const dayOfWeekArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let dayOfWeek = dayOfWeekArray[date.getDay()];
    let displayDate = `${date.getDate()}/${date.getMonth() + 1}`;
    let iconResult = iconKeyword(icon);

    return (
      <Col sm="2" className="forecast-days d-flex flex-column align-items-center justify-content-between">
        <Row>
          <p>{ dayOfWeek } {displayDate}</p>
        </Row>
        <Row>
          <Col sm="6" className="d-flex align-items-center">
            <FontAwesomeIcon icon={iconResult} className="weather-icons"/>
          </Col>
          <Col sm="6">
            <p className="no-bot-margin">{ Math.round(temperatureMax) }&#8451;</p>
            <p className="no-bot-margin">{ Math.round(temperatureMin) }&#8451;</p>
          </Col>
        </Row>
        <Row>
          <p>{ summary }</p>
        </Row>
      </Col>
    );
  }
}

export default Forecast;
