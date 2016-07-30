import {TOGGLE_PLAYER_STATE} from '../constants/actionTypes';
// Actions to add: ADD_POINTS, EDIT_SCORE, START_TIME, STOP_TIME,
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function gameDataReducer(state = initialState.gameData, action) {
  let newState;

  switch (action.type) {
    case TOGGLE_PLAYER_STATE:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      newState = objectAssign({}, state);
      console.log("TOGGLE_PLAYER_STATE");
      return newState;

    default:
      return state;
  }
}
