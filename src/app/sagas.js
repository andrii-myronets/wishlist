import { all, fork } from 'redux-saga/effects';
import wishlistSaga from '../Wishlist/sagas';

function* masterSaga() {
  yield all([
    fork(wishlistSaga),
  ])
}

export default masterSaga;