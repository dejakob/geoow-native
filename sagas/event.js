import Actions from '../actions';
import { call, put } from 'redux-saga/effects';

function* loadEventsNearby(action) {
    try {
        const result = yield call(apiFunc);

        yield put(Actions._loadEventsSuccess(result));
    } catch (e) {
        yield put(Actions._loadEventsFailed());
    }
}

export {
    loadEventsNearby
};
