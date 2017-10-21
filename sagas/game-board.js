import Actions from '../actions';
import * as CategoriesApi from '../api/game-board';
import { call, put } from 'redux-saga/effects';


function* loadCategories(action) {
    try {
        console.log('load categories');

        const categories = yield call(CategoriesApi.fetchCategories);

        console.log('categories', categories)
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