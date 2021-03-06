import Immutable from 'immutable';
import { ACTIONS } from '../constants';

const defaultState = Immutable.fromJS({
    currentQuest: null,

    isCreatingQuest: false,
    isAccomplishingQuest: false,
    isRejectingQuest: false
});

/**
 * Quest reducer
 */
function questReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.QUEST_CREATE_QUEST:
            return createQuest(state, action);

        case ACTIONS.QUEST_CREATE_QUEST_SUCCESS:
            return createQuestSuccess(state, action);

        case ACTIONS.QUEST_CREATE_QUEST_FAILED:
            return createQuestFailed(state, action);

        case ACTIONS.QUEST_ACCOMPLISH_QUEST:
            return accomplishQuest(state, action);

        case ACTIONS.QUEST_ACCOMPLISH_QUEST_SUCCESS:
            return accomplishQuestSuccess(state, action);

        case ACTIONS.QUEST_ACCOMPLISH_QUEST_FAILED:
            return accomplishQuestFailed(state, action);

        case ACTIONS.QUEST_REJECT_QUEST:
            return rejectQuest(state, action);

        case ACTIONS.QUEST_REJECT_QUEST_SUCCESS:
            return rejectQuestSuccess(state, action);

        case ACTIONS.QUEST_REJECT_QUEST_FAILED:
            return rejectQuestFailed(state, action);
    }

    return state;
}

function createQuest(state, action) {
    return state
        .set('isCreatingQuest', true);
}

function createQuestSuccess(state, action) {
    return state
        .set('isCreatingQuest', false)
        .set('currentQuest', Immutable.fromJS(action.quest));
}

function createQuestFailed(state, action) {
    return state
        .set('isCreatingQuest', false);
}

function accomplishQuest(state, action) {
    return state
        .set('isAccomplishingQuest', true);
}

function accomplishQuestSuccess(state, action) {
    return state
        .set('isAccomplishingQuest', false);
}

function accomplishQuestFailed(state, action) {
    return state
        .set('isAccomplishingQuest', false);
}

function rejectQuest(state, action) {
    return state
        .set('isRejectingQuest', true);
}

function rejectQuestSuccess(state, action) {
    return state
        .set('isRejectingQuest', false);
}

function rejectQuestFailed(state, action) {
    return state
        .set('isRejectingQuest', false);
}

export default questReducer;
