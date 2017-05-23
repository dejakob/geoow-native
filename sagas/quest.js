import Actions from '../actions';
import * as QuestApi from '../api/quest';
import { call, put } from 'redux-saga/effects';

function* createQuest(action) {
    try {
        const { eventId } = action;

        yield call(QuestApi.createQuest, eventId);
        yield put(Actions._createQuestSuccess());
    }
    catch (ex) {
        console.log('ex', ex);
        yield put(Actions._createQuestFailed());
    }
}

export {
    createQuest
}
