import { call, put, all, takeLatest } from 'redux-saga/effects';
import getUrlParams from './actions/utils/getUrlParams';
import ACTION_TYPES from './actions/actions-types';

export const fetchFilmById = id => ({
  type: ACTION_TYPES.fetchFilmById,
  id,
});

export const fetchFilms = params => ({
  type: ACTION_TYPES.fetchFilms,
  params,
});


export function saveFilms(films) {
  return {
    type: ACTION_TYPES.saveFilms,
    films,
  };
}

export function selectFilm(film) {
  return {
    type: ACTION_TYPES.selectFilm,
    film,
  };
}

export function* fetchFilmsAsync({ params }) {
  const url = getUrlParams('http://react-cdp-api.herokuapp.com/movies', params);
  const response = yield call(fetch, url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  const responseData = yield response.json();

  yield put(saveFilms(responseData.data));
}

export function* fetchFilmByIdAsync({ id }) {
  const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies/${id}`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const responseData = yield response.json();

  yield put(selectFilm(responseData));
}

export function* watchFetchFilmById() {
  yield takeLatest(ACTION_TYPES.fetchFilmById, fetchFilmByIdAsync);
}

export function* watchFetchFilms() {
  yield takeLatest(ACTION_TYPES.fetchFilms, fetchFilmsAsync);
}
export function* filmsSaga() {
  yield all([
    watchFetchFilms(),
    watchFetchFilmById(),
  ]);
}

export function resetSelectedFilm() {
  return {
    type: ACTION_TYPES.resetSelectedFilm,
  };
}

export function changeSearchValue(value) {
  return {
    type: ACTION_TYPES.changeSearchValue,
    value,
  };
}


export function changeSearchField(value) {
  return {
    type: ACTION_TYPES.changeSearchField,
    value,
  };
}

export function changeSortField(value) {
  return {
    type: ACTION_TYPES.changeSortField,
    value,
  };
}
