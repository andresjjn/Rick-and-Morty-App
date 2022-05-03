import { call, put, takeEvery } from "redux-saga/effects";

const url = "https://rickandmortyapi.com/api/location";

function getApi() {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((refined) => {
      return { results: refined.results, pages: refined.info.pages };
    })
    .catch((error) => console.error(error.message));
}

function* fetchLocations() {
  try {
    const locations = yield call(getApi);
    yield put({
      type: "GET_LOCATIONS_SUCCESS",
      locations: locations.results,
      pages: locations.pages,
    });
  } catch (error) {
    yield put({ type: "GET_LOCATIONS_FAILED", message: error.message });
  }
}

function* locationSaga() {
  yield takeEvery("GET_LOCATIONS_REQUESTED", fetchLocations);
}

export default locationSaga;
