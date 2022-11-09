import { TOTAL_QUANTITY } from '../actionsType';

export const totalQuantity = (productId, quantity) => ({
  type: TOTAL_QUANTITY,
  payload: { productId, quantity },
});
