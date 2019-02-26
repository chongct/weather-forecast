import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from "react-redux";
import { addLocation } from "../js/actions/index";

const mapStateToProps = state => {
  return state.location;
};
const mapDispatchToProps = dispatch => {
  return {
    addLocation: location => dispatch(addLocation(location))
  };
};

export class Location extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     location: ""
  //   };
  // }

  render() {
    // console.log(this.props);

    document.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        document.querySelector(".weather-input button").click();
      }
    });

    return (
      <div>
        <InputGroup className="weather-input">
          <Input onChange={(e) => this.props.addLocation({ location: e.target.value })} placeholder="Search location" />
          <InputGroupAddon addonType="append">
            <Button onClick={() => this.props.getWeather(this.props.location)}><FontAwesomeIcon icon="search" /></Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
