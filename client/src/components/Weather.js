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
        <p>{ result.temperature }</p>
        <p>{ result.summary }</p>
        {/*<FontAwesomeIcon icon="cloud-sun" />
        <FontAwesomeIcon icon="cloud-moon" />
        <FontAwesomeIcon icon="cloud-rain" />
        <FontAwesomeIcon icon="snowflake" />
        <FontAwesomeIcon icon="wind" />
        <FontAwesomeIcon icon="cloud" />*/}

        <Row>
          { weatherForecast }
        </Row>
      </div>
    );
  }
}

export default Weather;
