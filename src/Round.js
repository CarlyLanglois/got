import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as bracketActions from './actions';
import './App.css';
import Player from './Player';

class Round extends Component {
  render() {
    // console.log(Math.floor(Math.random() * Math.floor()))
    var players = [];
    this.props.round.forEach((p) => {
      players.push(<Player currentRound={this.props.currentRound} nextRound={this.props.nextRound} name={p} key={p}/>);
    });
    if (players.length) {
      var ran = Math.floor(Math.random() * Math.floor(players.length));
      console.log(ran)
      console.log(players[ran])
    }
    // var ran = Math.floor(Math.random() * Math.floor(players.length));
    // console.log(ran)
    // console.log(players[ran])
    return (
      <ul className='round'>
        MATCH ONE
        {players}
      </ul>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    round: state[ownProps.currentRound]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPlayer: (player) => {
      dispatch(bracketActions.addNextRoundPlayer(player));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Round);
