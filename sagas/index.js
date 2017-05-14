import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import * as eventSaga from './event';

function* mainSaga() {
    yield takeEvery(ACTIONS.EVENTS_NEARBY_LOAD, eventSaga.loadEventsNearby);
    yield takeEvery(ACTIONS.EVENTS_CATEGORIES_LOAD, eventSaga.loadCategories);
}

export default mainSaga;
