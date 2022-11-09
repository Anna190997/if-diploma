import { SIGNIN, SIGNOUT, ERROR } from '../actionsType';

const signIn = (userObj) => ({
  type: SIGNIN,
  payload: userObj,
});

const signOut = () => ({
  type: SIGNOUT,
});

const error = () => ({
  type: ERROR,
});

export default {
  signIn,
  signOut,
  error,
};
