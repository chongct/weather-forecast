import React, { Component } from 'react';
import '../styles/App.scss';

import gql from 'graphql-tag';
// import { Query } from 'react-apollo'
import { withApollo } from 'react-apollo';

import { Container, Row } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCloudRain, faSnowflake, faWind, faCloud, faCloudSun, faCloudMoon, faSearch, faTint, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { connect } from "react-redux";
import { addWeather } from "../js/actions/index";

import Location from './Location';
import ShowDate from './ShowDate';
import Weather from './Weather';

const API_QUERY = gql`
  query ApiQuery($field: String!) {
    apiQuery(field: $field) {
      result {
        time
        summary
        icon
        precipProbability
        temperature
        windSpeed
        windBearing
        dailySummary
      }
      forecast {
        time
        summary
        icon
        temperatureMin
        temperatureMax
      }
    }
  }
`

library.add(faSun, faMoon, faCloudRain, faSnowflake, faWind, faCloud, faCloudSun, faCloudMoon, faSearch, faTint, faLocationArrow);

const mapStateToProps = state => {
  return {
    loading: state.loading,
    weather: state.weather
  };
}
const mapDispatchToProps = dispatch => {
  return {
    addWeather: weather => dispatch(addWeather(weather))
  };
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  componentDidMount = async () => {
    // using CORS anywhere NodeJS proxy
    // const API_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/1.3451042,103.9200074`
    // const response = await fetch(API_URL)
    // const result = await response.json()
  }

  getWeather = async (location) => {
    // console.log(location);
    this.setState({ loading: true });
    const result = await this.props.client.query({
      query: API_QUERY,
      variables: { field: location }
    });
    console.log(result);
    this.setState({
      loading: result.loading
    });
    this.props.addWeather(result);
  }

  render() {
    // console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row className="justify-content-center mt-4">
              <h4>Weather Forecast</h4>
            </Row>
            <Row className="justify-content-center mt-2">
              <Location getWeather={ this.getWeather }/>
            </Row>
            <Row className="justify-content-center mt-4">
              <ShowDate />
            </Row>
            <Row className="forecast">
              {this.state.loading && (
                <p>loading....</p>
              )}
              {Object.keys(this.props.weather).length > 0 && (
                <Weather {...this.props.weather} />
              )}
            </Row>

            {/*<Row>
              <Query query={API_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <div>Loading....</div>
                if (error) return <div>Error</div>
                return (
                  <div>{data.weatherApi.summary}</div>
                )
              }}
              </Query>
            </Row>*/}
          </Container>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withApollo(App));
