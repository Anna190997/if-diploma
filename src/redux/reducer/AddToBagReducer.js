import { ADD_TO_BAG } from '../actionsType';

const addToBagReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_BAG:
       {
        const item = action.payload
         return  [...state, item]

      }
    default:
      return state;
  }
};

export default addToBagReducer;