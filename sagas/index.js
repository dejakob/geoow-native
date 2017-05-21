import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import * as authSaga from './auth';
import * as eventSaga from './event';
import * as userSaga from './user';
import * as locationSaga from './location';

function* mainSaga() {
    yield takeEvery(ACTIONS.EVENTS_NEARBY_LOAD, eventSaga.loadEventsNearby);
    yield takeEvery(ACTIONS.EVENTS_CATEGORIES_LOAD, eventSaga.loadCategories);

    yield takeEvery(ACTIONS.AUTH_ACCOUNT_KIT, authSaga.authAccountKit);

    yield takeEvery(ACTIONS.USER_UPDATE_CATEGORIES, userSaga.updateCategories);
    yield takeEvery(ACTIONS.USER_LOAD_STATS, userSaga.loadStats);
    yield takeEvery(ACTIONS.USER_LOAD_ME, userSaga.loadMe);

    yield takeEvery(ACTIONS.LOCATION_LOAD_GEOLOCATION, locationSaga.loadGeolocation);
}

export default mainSaga;
