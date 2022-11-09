import { ADD_TO_BAG, REMOVE_FROM_BAG, CLEAR_TO_BAG } from '../actionsType';

const bagAddAction = (payload) => ({
  type: ADD_TO_BAG,
  payload,
});

const removeBagAction = (id) => ({
  type: REMOVE_FROM_BAG,
  payload: id,
});

const clearToBagAction = () => ({
  type: CLEAR_TO_BAG,
});

export default { addToBagAction: bagAddAction, removeBagAction, clearToBagAction };
