import { ADD_TO_BAG } from '../actionsType';

const addToBagAction = (productId) => ({
  type: ADD_TO_BAG,
  payload: productId
});

export default addToBagAction;
