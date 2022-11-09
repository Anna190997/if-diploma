import { combineReducers } from 'redux';
import userStatus from './AuthReducer';
import apiResult from './ApiReducer';
import filterReducer from './FilterReducer';
import filterTitle from './FilterTitleReducer';
import counter from './CountReducer';
import bagReducer from './BagReducer';
import wishListReducer from './WishListReducer';
import counterWish from './CountWishReducer';
import quantityById from './TotalQuantityReducer';

export default combineReducers({
  userStatus,
  apiResult,
  filterReducer,
  filterTitle,
  counter,
  bagReducer,
  wishListReducer,
  counterWish,
  quantityById,
});
