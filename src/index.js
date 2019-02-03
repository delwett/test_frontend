import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from "react-apollo";


const cache = new InMemoryCache();


const client = new ApolloClient({
  link: new HttpLink({ uri: "http://0.0.0.0:3000/graphql"}),
  // link: 'http://0.0.0.0:3000/graphql',
  cache
  // uri: 'http://0.0.0.0:3000/graphql'
});

// client
//   .query({
//     query: gql`
//       {
//         authors {
//           name
//         }
//       }
//     `,
//     variables: { }
//   })
//   .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
