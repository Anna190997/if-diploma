import { takeEvery, call, put, select } from 'redux-saga/effects';
import ApiAction from './actions/ApiAction';

import { FETCH_PRODUCT } from './actionsType';

export function* watchFetchProduct() {
  yield takeEvery(FETCH_PRODUCT, fetchProductResult);
}

export function* fetchProductResult() {
  try {
    yield put(ApiAction.requestedProduct());
    const data = yield call(() => {
      return fetch(`https://modnikky-api.herokuapp.com/api/catalog`).then((res) => res.json());
    });
    yield put(ApiAction.apiAction(data));
  } catch (error) {
    yield put(ApiAction.requestedProductFailed());
  }
}
