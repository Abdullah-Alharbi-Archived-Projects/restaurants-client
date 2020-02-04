import { put, takeEvery, call } from "redux-saga/effects";
import http from "../services/http.service";

const RESOURCE = "users";
const AUTH_RESOURCE = "auth";
const ME = "@me";

function* signUp({ value }) {
  yield call(http.post, RESOURCE, value);
}

function* signIn({ value }) {
  try {
    const data = yield call(http.post, AUTH_RESOURCE, value);
    yield put({ type: "SET_USER_ASYNC", value: { token: data.token } });
    const user = yield call(http.get, ME);
    yield put({ type: "SET_USER_OBJECT_ASYNC", value: user });
  } catch (error) {
    yield put({ type: "DESTROY_USER_ASYNC" });
  }
}

function* destroySession() {
  yield call(http.destroy, AUTH_RESOURCE);
  yield put({ type: "DESTROY_USER_ASYNC" });
}

function* isAuthenticated() {
  const user = yield call(http.get, ME);
  yield put({ type: "SET_USER_OBJECT_ASYNC", value: user });
  yield put({ type: "IS_AUTHENTICATED_ASYNC" });
}

export function* watchSignUp() {
  yield takeEvery("SIGN_UP_USER", signUp);
}

export function* watchSignIn() {
  yield takeEvery("SET_USER", signIn);
}

export function* watchDestroySession() {
  yield takeEvery("DESTROY_USER", destroySession);
}

export function* watchIsAuthenticated() {
  yield takeEvery("IS_AUTHENTICATED", isAuthenticated);
}
