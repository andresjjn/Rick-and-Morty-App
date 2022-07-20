import { call, put, takeEvery } from "redux-saga/effects";

async function getApi({ page }) {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  const fetchRes = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const fetchRes_json = await fetchRes.json();
  return { results: fetchRes_json.results, pages: fetchRes_json.info.pages };
}

function* fetchCharacters(action) {
  try {
    const characters = yield call(getApi, action.payload);
    yield put({
      type: "GET_CHARACTERS_SUCCESS",
      characters: characters.results,
      pages: characters.pages,
    });
  } catch (error) {
    yield put({ type: "GET_CHARACTERS_FAILED", message: error.message });
  }
}

function* characterSaga() {
  yield takeEvery("GET_CHARACTERS_REQUESTED", fetchCharacters);
}

export default characterSaga;
