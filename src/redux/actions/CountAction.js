import { INCREMENT, DECREMENT, NULL } from '../actionsType';

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

const nullCounter = () => ({
  type: NULL,
});

export default { increment, decrement, nullCounter };
