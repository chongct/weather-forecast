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
    return (
      <div>
        <InputGroup className="weather-input">
          <Input onChange={(e) => this.setState({ location: e.target.value })} />
          <InputGroupAddon addonType="append">
            <Button onClick={() => this.props.getWeather(this.state.location)}><FontAwesomeIcon icon="search" /></Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default Location;
