import { REQUESTED_PRODUCT } from '../actionsType';

const apiResult = (state = [], action) => {
  switch (action.type) {
    case REQUESTED_PRODUCT:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};

export default apiResult;
