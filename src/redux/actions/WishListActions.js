import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST } from '../actionsType';

const wishListAddAction = (payload) => ({
    type: ADD_TO_WISH_LIST,
    payload,
});

const removeWishListAction = (id) => ({
    type: REMOVE_FROM_WISH_LIST,
    payload: id,
});


export default { wishListAddAction, removeWishListAction};