import React, { Component } from 'react';
import './App.css';
import Round from './Round';

class Tournament extends Component {
  render() {
    return (
      <div className="tournament">
        ROUND ONE
        <Round currentRound='roundOne' nextRound='roundTwo'/>
        ROUND TWO
        <Round currentRound='roundTwo' nextRound='roundThree'/>
        ROUND THREE
        <Round currentRound='roundThree' nextRound='roundFour'/>
      </div>
    );
  }
}

export default Tournament;
