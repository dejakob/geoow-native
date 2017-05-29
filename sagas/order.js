import Actions from '../actions';
import * as OrderApi from '../api/order';
import { call, put } from 'redux-saga/effects';

function* buy(action) {
    try {
        yield call(
            OrderApi.buy,
            action.articleId
        );
        yield put(Actions._buySuccess());
    }
    catch (ex) {
        yield put(Actions._buyFailed());
    }
}

export {
    buy
}