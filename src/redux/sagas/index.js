import { all } from "redux-saga/effects";
import characterSaga from "./characterSaga";
import episodeSaga from "./episodeSaga"
import locationSaga from "./locationSaga";

export default function* rootSaga() {
    yield all ([
        characterSaga(),
        episodeSaga(),
        locationSaga()
    ])
}
