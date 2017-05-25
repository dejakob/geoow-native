import Immutable from 'immutable';
import { ACTIONS } from '../constants';

const defaultState = Immutable.fromJS({
    currentQuest: null,

    isCreatingQuest: false
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

export default questReducer;
