import { put, takeEvery, call } from "redux-saga/effects";
import http from "../services/http.service";
import { toast } from "react-toastify";

const RESOURCE = "restaurants";

function* fetchRestaurants() {
  const data = yield call(http.get, RESOURCE);
  yield put({ type: "FETCH_RESTAURANTS_ASYNC", value: data });
}

function* fetchRestaurant({ value }) {
  const data = yield call(http.get, RESOURCE, value);
  yield put({ type: "FETCH_RESTAURANT_ASYNC", value: data });
}

function* postRestaurant({ value }) {
  const data = yield call(http.post, RESOURCE, value.restaurant);
  yield put({ type: "POST_RESTAURANT_ASYNC", value: data.restaurant });
  toast("Added Restaurant Successfully.", {
    type: "success"
  });
  value.push();
}

function* destroyRestaurant({ value }) {
  yield call(http.destroy, RESOURCE, value);
  yield put({ type: "DESTROY_RESTAURANT_ASYNC", value });
  toast("Deleted Restaurant Successfully.", {
    type: "error"
  });
}

function* updateRestaurant({ value }) {
  const data = yield call(http.put, RESOURCE, value.data, value.id);
  yield put({
    type: "UPDATE_RESTAURANT_ASYNC",
    value: data.restaurant
  });
  toast("Updated Restaurant Successfully.", {
    type: "info"
  });
}

export function* watchFetchRestaurants() {
  yield takeEvery("FETCH_RESTAURANTS", fetchRestaurants);
}

export function* watchFetchSingleRestaurant() {
  yield takeEvery("FETCH_RESTAURANT", fetchRestaurant);
}

export function* watchPostRestaurant() {
  yield takeEvery("POST_RESTAURANT", postRestaurant);
}

export function* watchUpdateRestaurant() {
  yield takeEvery("UPDATE_RESTAURANT", updateRestaurant);
}

export function* watchDestroyRestaurant() {
  yield takeEvery("DESTROY_RESTAURANT", destroyRestaurant);
}
