import axios from 'axios';
import { call, put, takeEvery } from "@redux-saga/core/effects";

import { getWishlistOptionsSuccess, GET_WISHLIST_OPTIONS } from "./ducks";


function* wishlistSaga () {
  yield takeEvery( GET_WISHLIST_OPTIONS, getWishlistOptionsSaga)
}

function* getWishlistOptionsSaga (action) {
  try {
    let response = yield call(requestGetWishlistOptions, action);
    yield put(getWishlistOptionsSuccess(response.data))
  } catch (e) {
    console.log(e)
  }
}

async function requestGetWishlistOptions (action) {
  return await axios('db.json')
}

export default wishlistSaga;