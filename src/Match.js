import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as bracketActions from './actions';
import './App.css';
import Player from './Player';

class Match extends Component {
  render() {
    var players = [];
    this.props.roundOne.forEach((p) => {
      players.push(<Player name={p} key={p}/>);
    });
    return (
      <div>
        {players}
      </div>
    );
  }
}

// Getting the bookmark and map stores
function mapStateToProps(state) {
  return {
    roundOne: state.roundOne,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPlayer: (player) => {
      dispatch(bracketActions.addRoundTwoPlayer(player));
    },
    // addBookmark: (isAdding) => {
    //   dispatch(bookmarkAction.addBookmark(isAdding));
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);
