import {TOGGLE_PLAYER_STATE,INCREASE_HOME_SCORE,DECREASE_HOME_SCORE,INCREASE_AWAY_SCORE,DECREASE_AWAY_SCORE} from '../constants/actionTypes';
// Actions to add: ADD_POINTS, EDIT_SCORE, START_TIME, STOP_TIME,
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function gameDataReducer(state = initialState.gameData, action) {
  let newState = objectAssign({}, state);
  console.log(action.type);
  switch (action.type) {
    case TOGGLE_PLAYER_STATE:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      for(let player of newState.players) {
        if (player.number == action.playerNumber) {
          player.playing = !player.playing;
        }
      }
      break;
    case INCREASE_HOME_SCORE:
      newState = objectAssign({}, state);
      newState.score.home++;
      break;
      
    case DECREASE_HOME_SCORE:
      newState = objectAssign({}, state);
      if (newState.score.home > 0) {
        newState.score.home--;
      }
      break;
    case INCREASE_AWAY_SCORE:
      newState.score.away++;
      break;
    case DECREASE_AWAY_SCORE:
      newState = objectAssign({}, state);
      if (newState.score.away > 0) {
        newState.score.away--;
      }
      break;
  }
  return newState;
}
