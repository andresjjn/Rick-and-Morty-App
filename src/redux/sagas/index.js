import { all } from "redux-saga/effects";
import characterSaga from "./characterSaga";
import episodeSaga from "./episodeSaga"

export default function* rootSaga() {
    yield all ([
        characterSaga(),
        episodeSaga()
    ])
}
