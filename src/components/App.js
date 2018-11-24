import React, { Component } from 'react';
// import logo from '../styles/logo.svg';
import '../styles/App.css';

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const API_QUERY = gql`
  {
    weatherApi {
      summary
      temperature
    }
  }
`

class App extends Component {
  componentDidMount = async () => {
    // using CORS anywhere NodeJS proxy
    // const API_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/1.3451042,103.9200074`
    // const response = await fetch(API_URL)
    // const result = await response.json()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Weather Forecast</h4>
          <p>Weather</p>

          <Query query={API_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading....</div>
              if (error) return <div>Error</div>
              return (
                <div>{data.weatherApi.summary}</div>
              )
            }}
          </Query>
        </header>
      </div>
    );
  }
}

export default App;
