import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          I was changed on the Feature branch today 2019.06.10
        </p>
        <p>this is the feature branch merge through travis-ci.org</p>
      </div>
    );
  }
}

export default App;