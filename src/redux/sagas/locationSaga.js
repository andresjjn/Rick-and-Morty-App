import { call, put, takeEvery } from "redux-saga/effects";

const url = "https://rickandmortyapi.com/api/location";

async function getApi() {
  const fetchRes = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const fetchRes_json = await fetchRes.json();
  return { results: fetchRes_json.results, pages: fetchRes_json.info.pages };
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
