import Actions from '../actions';
import store from '../services/store';
import * as DiaryApi from '../api/diary';
import { call, put } from 'redux-saga/effects';

function* getItems() {
    try {
        const items = yield call(DiaryApi.getMyDiary);
        yield put(Actions.loadDiaryItemsSuccess(items));
    }
    catch (ex) {
        yield put(Actions.loadDiaryItemsFailed());
    }
}

function* saveItem() {
    try {
        const diary = store.getState().diary;
        const newItem = diary.get('newItem').toJS();

        yield call(DiaryApi.createDiaryItem, newItem);
        yield put(Actions.saveDiaryItemSuccess());
    }
    catch (ex) {
        yield put(Actions.saveDiaryItemFailed());
    }
}

export {
    getItems,
    saveItem
};
