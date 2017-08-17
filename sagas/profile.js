import Actions from '../actions';
import { call, put } from 'redux-saga/effects';
import * as ProfileApi from '../api/profile';

function* update(action) {
    try {
        yield call(ProfileApi.updateProfile, action.data);
        yield put(Actions.profileUpdateSuccess());
    }
    catch (ex) {
        console.log('update profile failed', ex);
        yield put(Actions.profileUpdateFailed(ex));
    }
}

export {
    update
}