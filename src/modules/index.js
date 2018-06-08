import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { routerReducer } from 'react-router-redux';

import Reducer from './reducer';

import { filmsSaga } from './films';

function* rootSaga() {
  yield all([
    filmsSaga(),
  ]);
}

const rootReducer = combineReducers({
  state: Reducer,
  routing: routerReducer,
});

export {
  rootReducer,
  rootSaga,
};
