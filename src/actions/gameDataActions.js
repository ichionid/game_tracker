import * as types from '../constants/actionTypes';

export function togglePlayerState(settings, playerNumber) {
  return {type: types.TOGGLE_PLAYER_STATE, settings, playerNumber};
}
