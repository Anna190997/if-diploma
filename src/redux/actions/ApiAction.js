import { REQUESTED_PRODUCT, FILTER_PRODUCT, FILTER_TITLE } from '../actionsType';

const requestedProduct = (apiArr) => {
  return {
    type: REQUESTED_PRODUCT,
    payload: apiArr,
  };
};

const filterProduct = (filterArr) => {
  return {
    type: FILTER_PRODUCT,
    payload: filterArr,
  };
};

const filterTitle = (filterTitle) => {
  return {
    type: FILTER_TITLE,
    payload: filterTitle,
  };
};

export default {
  requestedProduct,
  filterProduct,
  filterTitle,
};
