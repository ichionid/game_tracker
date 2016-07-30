import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import gameData from './gameDataReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  gameData,
  routing: routerReducer
});

export default rootReducer;
