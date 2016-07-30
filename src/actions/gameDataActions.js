import * as types from '../constants/actionTypes';

export function togglePlayerState(playerNumber) {
  return {type: types.TOGGLE_PLAYER_STATE, playerNumber};
}
