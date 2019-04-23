
import {BRACKET} from '../action-types';


const defaultState = {
  name: 'default',
  roundOne: ['Gendry', 'Jamie', 'Robb', 'Jon'],
  roundTwo: [],
  roundThree: [],
  roundFour: [],
};


/** Main reducer.
 *  @param {Object} state The redux state.
 *  @param {Object} action The selected action object.
 *
 *  @returns {Object} The new state object.
 */
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case BRACKET.SET_NAME:
      return Object.assign({}, state, {name: action.name});
    case BRACKET.ADD_NEXT_ROUND_PLAYER:
      return Object.assign({}, state, {[action.round]: state[action.round].concat(action.player)});
    case BRACKET.REMOVE_NEXT_ROUND_PLAYER:
      return Object.assign({}, state, {[action.round]: state[action.round].filter((player) => player !== action.player)});
    default:
      return state;
  }
}
