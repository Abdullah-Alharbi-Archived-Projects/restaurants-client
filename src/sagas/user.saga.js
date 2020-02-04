import { put, takeEvery, call } from "redux-saga/effects";
import http from "../services/http.service";
import { toast } from "react-toastify";

const RESOURCE = "users";
const AUTH_RESOURCE = "auth";
const ME = "@me";

function* signUp({ value }) {
  yield call(http.post, RESOURCE, value);

  const firstName =
    value.firstName.charAt(0).toUpperCase() + value.firstName.slice(1);
  const lastName =
    value.lastName.charAt(0).toUpperCase() + value.lastName.slice(1);

  // "a".
  const fullName = `${firstName} ${lastName}`;

  toast(`Welcome ${fullName} to our community.`, {
    type: "info"
  });
}

function* signIn({ value }) {
  try {
    const data = yield call(http.post, AUTH_RESOURCE, value);
    yield put({ type: "SET_USER_ASYNC", value: { token: data.token } });
    const user = yield call(http.get, ME);
    yield put({ type: "SET_USER_OBJECT_ASYNC", value: user });

    const firstName =
      user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
    const lastName =
      user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);

    // "a".
    const fullName = `${firstName} ${lastName}`;

    toast(`Welcome, ${fullName}`);
  } catch (error) {
    yield put({ type: "DESTROY_USER_ASYNC" });
  }
}

function* destroySession() {
  yield call(http.destroy, AUTH_RESOURCE);
  yield put({ type: "DESTROY_USER_ASYNC" });
  toast(`Signed out Successfully.`, {
    type: "success"
  });
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
