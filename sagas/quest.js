import Actions from '../actions';
import * as QuestApi from '../api/quest';
import { call, put } from 'redux-saga/effects';

function* createQuest(action) {
    try {
        const { eventId } = action;

        const createdQuest = yield call(QuestApi.createQuest, eventId);
        console.log('created quest', createdQuest);

        yield put(Actions._createQuestSuccess(createdQuest));
    }
    catch (ex) {
        console.log('ex', ex);
        yield put(Actions._createQuestFailed());
    }
}

function* accomplishQuest(action) {
    try {
        const { questId, verificationCode } = action;
        const accomplishedData = yield call(QuestApi.accomplishQuest, questId, verificationCode);

        yield put(Actions._accomplishQuestSuccess(accomplishedData.score));
    }
    catch (ex) {
        yield put(Actions._accomplishQuestFailed());
    }
}

export {
    createQuest,
    accomplishQuest
}
