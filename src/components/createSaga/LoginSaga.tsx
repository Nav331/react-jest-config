import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUsersRequest,
} from "../createSlice/LoginSlice";

function* fetchUsersSaga(): Generator<any, void, any> {
  try {
    const response = yield call(
      axios.get,
      "http://localhost:3004/users"
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message || "Invalid Username or Password"));
  }
}

export function* userWatcherSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}
