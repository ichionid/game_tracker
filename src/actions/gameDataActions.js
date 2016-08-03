import * as types from '../constants/actionTypes';

export function togglePlayerState(playerNumber) {
  return {type: types.TOGGLE_PLAYER_STATE, playerNumber};
}
export function increaseHomeScore() {
  return {type: types.INCREASE_HOME_SCORE};
}
export function decreaseHomeScore() {
  return {type: types.DECREASE_HOME_SCORE};
}
export function increaseAwayScore() {
  return {type: types.INCREASE_AWAY_SCORE};
}
export function decreaseAwayScore() {
  return {type: types.DECREASE_AWAY_SCORE};
}
