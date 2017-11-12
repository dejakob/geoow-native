import Actions from '../actions';
import * as GameboardApi from '../api/game-board';
import { call, put } from 'redux-saga/effects';


function* loadCategories(action) {
    try {
        const categories = yield call(GameboardApi.fetchCategories);
        yield put(Actions._loadCategoriesSuccess(categories));
    }
    catch (ex) {
        console.log('ex', ex);
        yield put(Actions._loadCategoriesSuccess());
    }
}

function* finishGoal(action) {
    try {
        console.log('finish goal', action);
        yield call(GameboardApi.finishGoal, action.levelId, action.goalId);
    }
    catch (ex) {
        console.log('ex', ex);
    }
}

export {
    loadCategories,
    finishGoal
}