import { ACTIONS } from '../constants';

function createQuest(eventId) {
    return {
        type: ACTIONS.QUEST_CREATE_QUEST,
        eventId
    }
}

function _createQuestSuccess(quest) {
    return {
        type: ACTIONS.QUEST_CREATE_QUEST_SUCCESS,
        quest
    }
}

function _createQuestFailed() {
    return {
        type: ACTIONS.QUEST_CREATE_QUEST_FAILED
    }
}

function accomplishQuest(questId, verificationCode) {
    return {
        type: ACTIONS.QUEST_ACCOMPLISH_QUEST,
        questId,
        verificationCode
    }
}

function _accomplishQuestSuccess(score) {
    return {
        type: ACTIONS.QUEST_ACCOMPLISH_QUEST_SUCCESS,
        score
    }
}

function _accomplishQuestFailed() {
    return {
        type: ACTIONS.QUEST_ACCOMPLISH_QUEST_FAILED
    }
}

function rejectQuest(questId, verificationCode) {
    return {
        type: ACTIONS.QUEST_REJECT_QUEST,
        questId,
        verificationCode
    }
}

function _rejectQuestSuccess(score) {
    return {
        type: ACTIONS.QUEST_REJECT_QUEST,
        score
    }
}

function _rejectQuestFailed() {

    return {
        type: ACTIONS.QUEST_REJECT_QUEST
    }
}

export {
    createQuest,
    _createQuestSuccess,
    _createQuestFailed,

    accomplishQuest,
    _accomplishQuestSuccess,
    _accomplishQuestFailed,

    rejectQuest,
    _rejectQuestSuccess,
    _rejectQuestFailed
};
