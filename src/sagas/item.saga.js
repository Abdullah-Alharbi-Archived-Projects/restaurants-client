import { put, takeEvery, call } from "redux-saga/effects";
import http from "../services/http.service";
import { toast } from "react-toastify";

const RESOURCE = "restaurants";

function* postItem({ value }) {
  const data = yield call(http.post, RESOURCE, value.item, `${value.id}/menu`);
  yield put({
    type: "POST_RESTAURANT_ITEM_ASYNC",
    value: { item: data.item, id: value.id }
  });
  toast("Added Item Successfully.", {
    type: "success"
  });
}

function* updateItem({ value }) {
  const data = yield call(
    http.put,
    RESOURCE,
    value.data,
    `${value.id}/menu/${value.item}/`
  );

  yield put({
    type: "UPDATE_RESTAURANT_ITEM_ASYNC",
    value: { id: value.id, item: value.item, data }
  });
  toast("Updated Item Successfully.", {
    type: "info"
  });
}

function* destroyItem({ value }) {
  yield call(http.destroy, RESOURCE, `${value.id}/menu/${value.item}/`);
  yield put({ type: "DESTROY_RESTAURANT_ITEM_ASYNC", value });
  toast("Deleted Item Successfully.", {
    type: "error"
  });
}

export function* watchPostItem() {
  yield takeEvery("POST_RESTAURANT_ITEM", postItem);
}

export function* watchUpdateItem() {
  yield takeEvery("UPDATE_RESTAURANT_ITEM", updateItem);
}

export function* watchDestroyItem() {
  yield takeEvery("DETSROY_RESTAURANT_ITEM", destroyItem);
}
