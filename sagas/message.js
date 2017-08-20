import Actions from '../actions';
import { call, put } from 'redux-saga/effects';

import * as MessageApi from '../api/message';

function* loadMessages(action) {
    try {
        const { user, venue } = action;

        let result = null;
        let type = null;

        if (user) {
            result = yield call(MessageApi.loadUserMessages, user);
            type = 'user';
        }
        else {
            result = yield call(MessageApi.loadVenueMessages, venue);
            type = 'venue';
        }

        yield put(Actions.loadMessagesSuccess(type, user || venue, result.messages));
    }
    catch (ex) {
        yield put(Actions.loadMessagesFailed());
    }
}

function* sendMessage(action) {
    try {
        const { user, venue, body } = action;

        console.log('SEND MSG', action);

        if (user) {
            yield call(MessageApi.sendMessageToUser, user, body);
        }
        else {
            yield call(MessageApi.sendMessageToVenue, venue, body);
        }

        yield put(Actions.sendMessageSuccess());
    }
    catch (ex) {
        yield put(Actions.sendMessageFailed());
    }
}

export {
    loadMessages,
    sendMessage
};
