import { AsyncStorage } from 'react-native';
import Actions from '../actions';
import * as UserApi from '../api/user';
import { call, put } from 'redux-saga/effects';

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

export {
    updateCategories
};
