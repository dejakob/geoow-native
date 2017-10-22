import Actions from '../actions';
import * as CategoriesApi from '../api/game-board';
import { call, put } from 'redux-saga/effects';


function* loadCategories(action) {
    try {
        const categories = yield call(CategoriesApi.fetchCategories);
        yield put(Actions._loadCategoriesSuccess(categories));
    }
    catch (ex) {
        console.log('ex', ex);
        yield put(Actions._loadCategoriesSuccess());
    }
}

export {
    loadCategories
}