import React, { Component } from 'react';
import './App.css';
import Tournament from './Tournament';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Game of Thirst</h1>
        <Tournament/>
      </div>
    );
  }
}

export default App;
