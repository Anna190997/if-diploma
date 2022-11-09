import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST } from '../actionsType';

const initialState = {
  favoritiesProducts: [],
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISH_LIST:
      return { ...state, favoritiesProducts: state.favoritiesProducts.concat(action.payload) };
    case REMOVE_FROM_WISH_LIST:
      return {
        ...state,
        favoritiesProducts: [
          ...state.favoritiesProducts.filter((item) => item.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default wishListReducer;
