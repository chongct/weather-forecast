import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: ""
    };
  }

  render() {
    document.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        document.querySelector(".weather-input button").click();
      }
    });

    return (
      <div>
        <InputGroup className="weather-input">
          <Input onChange={(e) => this.setState({ location: e.target.value })} placeholder="Search location" />
          <InputGroupAddon addonType="append">
            <Button onClick={() => this.props.getWeather(this.state.location)}><FontAwesomeIcon icon="search" /></Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default Location;
