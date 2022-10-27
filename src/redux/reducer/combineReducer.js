import { combineReducers } from 'redux';
import userStatus from './AuthReducer';
import apiResult from './ApiReducer';

export default combineReducers({
  userStatus,
  apiResult,
});
