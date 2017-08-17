import Actions from '../actions';
import store from '../services/store';
import * as PeopleApi from '../api/people';
import { call, put } from 'redux-saga/effects';

function* loadNearby() {
    try {
        const location = store.getState().location;
        const latitude = location.get('latitude');
        const longitude = location.get('longitude');

        const result = yield call(
            PeopleApi.loadPeopleNearby,
            location.get('latitude'),
            location.get('longitude')
        );

        yield put(Actions._loadPeopleNearbySuccess(result.peopleNearby));
    }
    catch (ex) {
        yield put(Actions._loadPeopleNearbyFailed(ex));
    }
}

export {
    loadNearby
};
