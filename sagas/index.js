import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import * as authSaga from './auth';
import * as eventSaga from './event';
import * as userSaga from './user';
import * as locationSaga from './location';
import * as questSaga from './quest';
import * as orderSaga from './order';
import * as peopleSaga from './people';
import * as profileSaga from './profile';
import * as cameraSaga from './camera';
import * as messageSaga from './message';

function* mainSaga() {
    yield takeEvery(ACTIONS.DISCOVER_LOAD_EVENTS_NEARBY, eventSaga.loadEventsNearby);
    yield takeEvery(ACTIONS.EVENTS_CATEGORIES_LOAD, eventSaga.loadCategories);
    yield takeEvery(ACTIONS.EVENTS_LOAD_BY_ID, eventSaga.loadEventById);

    yield takeEvery(ACTIONS.AUTH_EMAIL, authSaga.authEmail);
    yield takeEvery(ACTIONS.AUTH_VERIFY, authSaga.authVerify);

    yield takeEvery(ACTIONS.USER_UPDATE_CATEGORIES, userSaga.updateCategories);
    yield takeEvery(ACTIONS.USER_LOAD_STATS, userSaga.loadStats);
    yield takeEvery(ACTIONS.USER_LOAD_ME, userSaga.loadMe);

    yield takeEvery(ACTIONS.LOCATION_LOAD_GEOLOCATION, locationSaga.loadGeolocation);

    yield takeEvery(ACTIONS.QUEST_CREATE_QUEST, questSaga.createQuest);
    yield takeEvery(ACTIONS.QUEST_ACCOMPLISH_QUEST, questSaga.accomplishQuest);
    yield takeEvery(ACTIONS.QUEST_REJECT_QUEST, questSaga.rejectQuest);

    yield takeEvery(ACTIONS.ORDER_BUY, orderSaga.buy);

    yield takeEvery(ACTIONS.PEOPLE_LOAD_NEARBY, peopleSaga.loadNearby);

    yield takeEvery(ACTIONS.CAMERA_UPLOAD_IMAGE, cameraSaga.uploadImage);

    yield takeEvery(ACTIONS.PROFILE_UPDATE, profileSaga.update);

    yield takeEvery(ACTIONS.MESSAGE_LOAD, messageSaga.loadMessages);
    yield takeEvery(ACTIONS.MESSAGE_SEND, messageSaga.sendMessage);
}

export default mainSaga;
