import { FILTER_TITLE} from "../actionsType";

const filterTitle = (state = '', action) => {
    switch (action.type) {
        case  FILTER_TITLE:
            return {
                ...state,
                response: action.payload,
            };
        default:
            return state;
    }
};

export default filterTitle;