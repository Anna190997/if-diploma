import { ADD_TO_BAG, REMOVE_FROM_BAG, CLEAR_TO_BAG } from '../actionsType';

const initialState = {
  bagProducts: [],
};

const bagReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BAG:
      return { ...state, bagProducts: state.bagProducts.concat(action.payload) };
    case REMOVE_FROM_BAG:
      return {
        ...state,
        bagProducts: [...state.bagProducts.filter((item) => item.id !== action.payload)],
      };
    case CLEAR_TO_BAG:
      return { ...state, bagProducts: [] };
    default:
      return state;
  }
};

export default bagReducer;
