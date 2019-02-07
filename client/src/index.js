import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
// import gql from 'graphql-tag';

import 'bootstrap/dist/css/bootstrap.css';

// redux
// import index from './js/index';
import { Provider } from "react-redux";
import store from "./js/store/index";

const httpLink = new createHttpLink({
  uri: process.env.REACT_APP_URI
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// client.query({
//   query: gql`
//     {
//       weatherApi {
//         summary
//         temperature
//       }
//     }
//   `
// }).then(response => console.log(response))

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
