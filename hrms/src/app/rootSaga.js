import exampleSaga from  "./saga/example"
import { call, takeEvery, put } from "redux-saga/effects";

export default function* rootSaga() {
    yield takeEvery([
        exampleSaga(),
    ])
  }