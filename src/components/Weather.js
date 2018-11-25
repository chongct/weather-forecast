import React, { Component } from 'react';

class Weather extends Component {

  render() {
    console.log(this.props)
    let { summary, temperature } = this.props.data.apiQuery

    return (
      <div>
        <p>{ temperature }</p>
        <p>{ summary }</p>
      </div>
    );
  }

}

export default Weather;
