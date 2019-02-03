import React, { Component } from 'react';
import './App.css';

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'


class App extends Component {

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>
    }
    this.props.data.authors.forEach(function(e) { console.log(e.name)})
    return (
      <div className="App">
        {this.props.data.authors.map(function(i){
          return (<div>{i.name}</div>)
        })}
      </div>
    )
  }
}

export default graphql(gql`{
                            authors {
                              name 
                            } 
                          }`)(App)
