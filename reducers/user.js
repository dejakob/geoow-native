import Immutable from 'immutable';
import { ACTIONS } from '../constants';

const defaultState = Immutable.fromJS({
    me: {
        categories: [],
        score: 0,
        stats: [],
        email: null
    },

    isUpdatingCategories: false,
    isLoadingStats: false,
    isLoadingProfile: false
});

function userReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.USER_UPDATE_CATEGORIES:
            return updateCategories(state, action);

        case ACTIONS.USER_UPDATE_CATEGORIES_SUCCESS:
            return updateCategoriesSuccess(state, action);

        case ACTIONS.USER_UPDATE_CATEGORIES_FAILED:
            return updateCategoriesFailed(state, action);

        case ACTIONS.USER_LOAD_STATS:
            return loadStats(state, action);

        case ACTIONS.USER_LOAD_STATS_SUCCESS:
            return loadStatsSuccess(state, action);

        case ACTIONS.USER_LOAD_STATS_FAILED:
            return loadStatsFailed(state, action);

        case ACTIONS.USER_LOAD_ME:
            return loadMe(state, action);

        case ACTIONS.USER_LOAD_ME_SUCCESS:
            return loadMeSuccess(state, action);

        case ACTIONS.USER_LOAD_ME_FAILED:
            return loadMeFailed(state, action);


        case ACTIONS.QUEST_ACCOMPLISH_QUEST_SUCCESS:
            return addScore(state, action);

        case ACTIONS.QUEST_REJECT_QUEST_SUCCESS:
            return addScore(state, action);

        case ACTIONS.ORDER_BUY_SUCCESS:
            return addScore(state, action);


        case ACTIONS.CAMERA_UPLOAD_IMAGE_SUCCESS:
            return changeAvatar(state, action);

        case ACTIONS.PROFILE_UPDATE:
            return profileUpdate(state, action);
    }

    return state;
}

function updateCategories(state, action) {
    return state.set('isUpdatingCategories', true);
}

function updateCategoriesSuccess(state, action) {
    return state
        .set('isUpdatingCategories', true)
        .setIn(['me', 'categories'], Immutable.fromJS(action.categories));
}

function updateCategoriesFailed(state, action) {
    return state.set('isUpdatingCategories', true);
}

function loadStats(state, action) {
    return state.set('isLoadingStats', true);
}

function loadStatsSuccess(state, action) {
    return state
        .setIn(['me', 'stats'], Immutable.fromJS(action.stats))
        .set('isLoadingStats', false);
}

function loadStatsFailed(state, action) {
    return state.set('isLoadingStats', false);
}

function loadMe(state, action) {
    return state
        .set('isLoadingProfile', true);
}

function loadMeSuccess(state, action) {
    return state
        .set('isLoadingProfile', false)
        .update('me', me => me.mergeDeep(Immutable.fromJS(action.me)));
}

function loadMeFailed(state, action) {
    return state.set('isLoadingProfile', false);
}

function addScore(state, action) {
    return state.updateIn(['me', 'score'], oldScore => oldScore + action.score);
}

function changeAvatar(state, action) {
    return state.setIn(['me', 'avatar'], action.savedImagePath);
}

function profileUpdate(state, action) {
    return state.update('me', me => me.mergeDeep(Immutable.fromJS(action.data)));
}

export default userReducer;
