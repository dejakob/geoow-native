import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import * as authSaga from './auth';
import * as userSaga from './user';
import * as locationSaga from './location';
import * as gameBoardSaga from './game-board';

function* mainSaga() {
    yield takeEvery(ACTIONS.AUTH_EMAIL, authSaga.authEmail);
    yield takeEvery(ACTIONS.AUTH_VERIFY, authSaga.authVerify);

    yield takeEvery(ACTIONS.USER_UPDATE_CATEGORIES, userSaga.updateCategories);
    yield takeEvery(ACTIONS.USER_LOAD_STATS, userSaga.loadStats);
    yield takeEvery(ACTIONS.USER_LOAD_ME, userSaga.loadMe);

    yield takeEvery(ACTIONS.LOCATION_LOAD_GEOLOCATION, locationSaga.loadGeolocation);

    yield takeEvery(ACTIONS.LOAD_CATEGORIES, gameBoardSaga.loadCategories);
    yield takeEvery(ACTIONS.FINISH_GOAL, gameBoardSaga.finishGoal);
}

export default mainSaga;
