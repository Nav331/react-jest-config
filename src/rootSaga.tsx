import { all } from "redux-saga/effects";
import { userWatcherSaga } from ".././src/components/createSaga/LoginSaga";

export default function* rootSaga() {
  yield all([userWatcherSaga()]);
}
