import {BRACKET} from '../action-types';


/** Action to update the map name in map state.
 *  @param {string} name Map name.
 *
 *  @returns {Object} Action object to pass to reducer.
 */
export function setBracketName(name) {
  return {
    type: BRACKET.SET_NAME,
    name,
  };
}

export function addNextRoundPlayer(round, player) {
  return {
    type: BRACKET.ADD_NEXT_ROUND_PLAYER,
    round,
    player,
  };
}

export function removeNextRoundPlayer(round, player) {
  return {
    type: BRACKET.REMOVE_NEXT_ROUND_PLAYER,
    round,
    player,
  };
}
