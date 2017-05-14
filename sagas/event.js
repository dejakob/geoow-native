import Actions from '../actions';
import * as EventApi from '../api/event';
import { call, put } from 'redux-saga/effects';

function* loadEventsNearby(action) {
    try {
        throw new Error('To be implemented');
        const result = yield call(apiFunc);

        yield put(Actions._loadEventsSuccess(result));
    } catch (e) {
        yield put(Actions._loadEventsFailed());
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
