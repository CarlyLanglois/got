import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as bracketActions from './actions';
import './App.css';

class Player extends Component {
  constructor(props, context) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      check: false
    }
  }


  handleClick(e){
    e.preventDefault();
    if (this.state.check) {
      this.props.removePlayer(this.props.nextRound, this.props.name);
    } else {
      this.props.addPlayer(this.props.nextRound, this.props.name);
    }
    this.setState({check: !this.state.check})
  }
  render() {
    return (
      <li className="game game-top winner" onClick={this.handleClick}>{this.props.name} {this.state.check ? '- winner' : null}</li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPlayer: (round, player) => {
      dispatch(bracketActions.addNextRoundPlayer(round, player));
    },
    removePlayer: (round, player) => {
      dispatch(bracketActions.removeNextRoundPlayer(round, player));
    }
  };
}

export default connect(null, mapDispatchToProps)(Player);
