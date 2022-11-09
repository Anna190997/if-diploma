import { SIGNIN, SIGNOUT, ERROR } from '../actionsType';

const userStatus = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    case ERROR:
      return {
        ...state,
        user: {},
        auth: false,
      };
    case SIGNOUT:
      return {
        state,
      };
    default:
      return state;
  }
};

export default userStatus;
