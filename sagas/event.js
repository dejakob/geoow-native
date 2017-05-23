import Actions from '../actions';
import * as EventApi from '../api/event';
import store from '../services/store';
import { call, put } from 'redux-saga/effects';

function* loadEventsNearby(action) {
    try {
        const location = store.getState().location;
        const result = yield call(
            EventApi.loadEventsNearby,
            location.get('longitude'),
            location.get('latitude')
        );

        yield put(Actions._loadEventsNearbySuccess(result));
    } catch (e) {
        yield put(Actions._loadEventsNearbyFailed());
    }
}

function* loadCategories() {
    try {
        const categories = yield call(EventApi.loadCategories);

        yield put(Actions._loadCategoriesSuccess(categories))
    } catch (e) {
        console.log('e', e);
        yield put(Actions._loadCategoriesFailed());
    }
}

export {
    loadEventsNearby,
    loadCategories
};
