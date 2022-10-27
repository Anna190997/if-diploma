import {API, FETCH_PRODUCT, REQUESTED_PRODUCT, REQUESTED_PRODUCT_FAILED} from '../actionsType';

const apiAction = (apiArr) => {
  return {
    type: API,
    payload: apiArr,
  };
};

const requestedProduct = (apiArr) => {
  return {
    type: REQUESTED_PRODUCT,
    payload: apiArr,
  };
};

const fetchProduct = () => {
  return {
    type: FETCH_PRODUCT,
  };
};

const requestedProductFailed = () => {
  return {
    type: REQUESTED_PRODUCT_FAILED,
  };
};

export default {
  apiAction,
  requestedProduct,
  fetchProduct,
  requestedProductFailed
};
