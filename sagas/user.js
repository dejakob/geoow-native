import { AsyncStorage } from 'react-native';
import Actions from '../actions';
import * as UserApi from '../api/user';
import { call, put } from 'redux-saga/effects';
import { getCurrentId } from '../services/push-notifications';

/**
 * Update the users categories
 */
function* updateCategories(action) {
    try {
        const { categories } = action;

        yield call(UserApi.updateCategories, categories);
        yield put(Actions._updateCategoriesSuccess(categories));
    }
    catch (ex) {
        yield put(Actions._updateCategoriesFailed());
    }
}

function* loadStats(action) {
    try {
        const stats = yield call(UserApi.fetchStats);
        yield put(Actions._loadStatsSuccess(stats));
    }
    catch (ex) {
        yield put(Actions._loadStatsFailed());
    }
}

function* loadMe() {
    try {
        const me = yield call(UserApi.fetchMe);
        yield call(UserApi.addPushNotificationId, getCurrentId());
        yield put(Actions._loadMeSuccess(me));
    }
    catch (ex) {
        yield put(Actions._loadMeFailed());
    }
}

export {
    updateCategories,
    loadStats,
    loadMe
};
