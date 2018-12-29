import React, { Component } from 'react';
// import logo from '../styles/logo.svg';
import '../styles/App.scss';

import gql from 'graphql-tag'
// import { Query } from 'react-apollo'
import { withApollo } from 'react-apollo'

import { Container, Row } from 'reactstrap'

import Location from './Location'
import ShowDate from './ShowDate'
import Weather from './Weather'

const API_QUERY = gql`
  query ApiQuery($field: String!) {
    apiQuery(field: $field) {
      result {
        time
        summary
        temperature
      }
      forecast {
        time
        summary
        temperatureMin
        temperatureMax
      }
    }
  }
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: null,
      weather: {}
    }
  }

  componentDidMount = async () => {
    // using CORS anywhere NodeJS proxy
    // const API_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/1.3451042,103.9200074`
    // const response = await fetch(API_URL)
    // const result = await response.json()
  }

  _getWeather = async (location) => {
    console.log(location)
    this.setState({ loading: true })
    const result = await this.props.client.query({
      query: API_QUERY,
      variables: { field: location }
    })
    // console.log(result)
    this.setState({
      weather: result,
      loading: result.loading
    })
  }

  render() {
    // console.log(Object.keys(this.state.weather))

    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Location getWeather={ this._getWeather }/>
            </Row>
            <Row>
              <ShowDate />
            </Row>
            <Row>
              {this.state.loading && (
                <p>loading....</p>
              )}
              {Object.keys(this.state.weather).length > 0 && (
                <Weather {...this.state.weather} />
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

export default withApollo(App);
