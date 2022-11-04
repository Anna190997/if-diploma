import { INCREMENT_WISH, DECREMENT_WISH } from '../actionsType';

const counterWish = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_WISH:
      return state + 1;
    case DECREMENT_WISH:
      return state - 1;
    default:
      return state;
  }
};

export default counterWish;
