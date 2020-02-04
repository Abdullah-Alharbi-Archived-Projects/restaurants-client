import { all, fork } from "redux-saga/effects";
import {
  watchFetchRestaurants,
  watchFetchSingleRestaurant,
  watchPostRestaurant,
  watchUpdateRestaurant,
  watchDestroyRestaurant
} from "./restaurants.saga";
import { watchPostItem, watchUpdateItem, watchDestroyItem } from "./item.saga";
import {
  watchSignIn,
  watchSignUp,
  watchDestroySession,
  watchIsAuthenticated
} from "./user.saga";

export default function* watch() {
  yield all([
    fork(watchFetchRestaurants),
    fork(watchFetchSingleRestaurant),
    fork(watchPostRestaurant),
    fork(watchUpdateRestaurant),
    fork(watchDestroyRestaurant),
    fork(watchPostItem),
    fork(watchUpdateItem),
    fork(watchDestroyItem),
    fork(watchSignIn),
    fork(watchSignUp),
    fork(watchDestroySession),
    fork(watchIsAuthenticated)
  ]);
}
