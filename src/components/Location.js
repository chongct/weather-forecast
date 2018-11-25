import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

class Location extends Component {
  constructor() {
    super()
    this.state = {
      location: ""
    }
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Input onChange={(e) => this.setState({ location: e.target.value })} />
          <InputGroupAddon addonType="append">
            <Button color="secondary" onClick={() => this.props.getWeather(this.state.location)}>Get weather</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }

}

export default Location;
