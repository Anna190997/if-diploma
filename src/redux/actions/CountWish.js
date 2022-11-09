import { INCREMENT_WISH, DECREMENT_WISH } from '../actionsType';

const incrementWish = () => ({
  type: INCREMENT_WISH,
});

const decrementWish = () => ({
  type: DECREMENT_WISH,
});

export default { incrementWish, decrementWish };
