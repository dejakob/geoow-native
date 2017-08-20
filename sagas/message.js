import Actions from '../actions';
import { call, put } from 'redux-saga/effects';

function* loadMessages(action) {
    try {
        const { user, venue } = action;

        yield put(Actions.loadMessagesSuccess());
    }
    catch (ex) {
        yield put(Actions.loadMessagesFailed());
    }
}

function* sendMessage(action) {
    try {
        const { user, venue, body } = action;

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
