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

export {
    createQuest,
    _createQuestSuccess,
    _createQuestFailed
};
