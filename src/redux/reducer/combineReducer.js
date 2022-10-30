import { combineReducers } from 'redux';
import userStatus from './AuthReducer';
import apiResult from './ApiReducer';
import filterReducer from './FilterReducer';
import filterTitle from './FilterTitleReducer';
import counter from "./CountReducer";
import addToBagReducer from "./AddToBagReducer";

export default combineReducers({
  userStatus,
  apiResult,
  filterReducer,
  filterTitle,
  counter,
  addToBagReducer
});
