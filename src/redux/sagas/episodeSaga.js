import { call, put, takeEvery } from "redux-saga/effects";

const url = "https://rickandmortyapi.com/api/episode";

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

function* fetchEpisodes() {
  try {
    const episodes = yield call(getApi);
    yield put({
      type: "GET_EPISODES_SUCCESS",
      episodes: episodes,
      pages: episodes.pages,
    });
  } catch (error) {
    yield put({ type: "GET_EPISODES_FAILED", message: error.message });
  }
}

function* episodeSaga() {
  yield takeEvery("GET_EPISODES_REQUESTED", fetchEpisodes);
}

export default episodeSaga;
