import { TOTAL_QUANTITY } from '../actionsType';

const quantityById = (state = {}, action) => {
  switch (action.type) {
    case TOTAL_QUANTITY:
      return {
        ...state,
        [action.payload.productId]:
          (state[action.payload.productId] || 0) + action.payload.quantity,
      };
    default:
      return state;
  }
};

export default quantityById;
