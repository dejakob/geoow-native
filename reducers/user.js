import Immutable from 'immutable';
import { ACTIONS } from '../constants';

const defaultState = Immutable.fromJS({
    me: {
        categories: [],
        score: 0,
        stats: []
    },

    isUpdatingCategories: false
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

export default userReducer;
