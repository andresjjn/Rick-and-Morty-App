import { call, put, takeEvery } from "redux-saga/effects";

const url = "https://rickandmortyapi.com/api/episode";

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
