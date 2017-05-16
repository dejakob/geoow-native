import Immutable from 'immutable';
import { ACTIONS } from '../constants';

const defaultState = Immutable.fromJS({
    me: {
        categories: [],
        score: 0,
        stats: []
    },

    isUpdatingCategories: false,
    isLoadingStats: false
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
        .set('isLoadingStats', false)
        .updateIn(['me', 'stats'], stats =>
            stats.mergeDeep(Immutable.fromJS(action.stats))
        );
}

function loadStatsFailed(state, action) {
    return state.set('isLoadingStats', false);
}

export default userReducer;
