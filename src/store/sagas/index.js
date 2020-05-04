import { all, takeLatest } from "redux-saga/effects";

import { loginRequestMW, signOutMW } from "./auth";
import { updateUserRequest } from "./user";

export default function* rootSaga() {
  return yield all([
    takeLatest("LOGIN_REQUEST", loginRequestMW),
    takeLatest("SIGN_OUT_REQUEST", signOutMW),
    takeLatest("UPDATE_USER", updateUserRequest)
  ]);
}
