import { API } from '../actionsType';

const apiResult = (state = [], action) => {
  switch (action.type) {
    case API:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};
export default apiResult;
