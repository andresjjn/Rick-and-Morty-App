import { call, put, takeEvery } from 'redux-saga/effects';

function getApi({ page }) {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    return fetch (url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
        .then(refined => refined.results)
        .catch(error => console.error(error.message))
}

function* fetchCharacters(action) {
    try {
        const characters = yield call(getApi, action.payload);
        yield put({type: 'GET_CHARACTERS_SUCCESS', chatacters: characters})
    } catch (error) {
        yield put({ type: 'GET_CHARACTERS_FAILED', message: error.message })
    }
}

function* characterSaga() {
    yield takeEvery('GET_CHARACTERS_REQUESTED', fetchCharacters)
}

export default characterSaga;
