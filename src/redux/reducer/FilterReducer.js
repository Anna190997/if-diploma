import {FILTER_PRODUCT} from "../actionsType";

const filterResult = (state = [], action) => {
    switch (action.type) {
        case FILTER_PRODUCT:
            return {
                ...state,
                response: action.payload,
            };
        default:
            return state;
    }
};

export default filterResult;