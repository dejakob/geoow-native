import Immutable from 'immutable';
import ACTIONS from '../constants/actions';

const defaultState = Immutable.fromJS({
    categories: [],

    isLoadingCategories: false
});

function eventReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.EVENTS_CATEGORIES_LOAD:
            return loadCategories(state, action);

        case ACTIONS.EVENTS_CATEGORIES_LOAD_SUCCESS:
            return loadCategoriesSuccess(state, action);

        case ACTIONS.EVENTS_CATEGORIES_LOAD_FAILED:
            return loadCategoriesFailed(state, action);
    }

    return state;
}

function loadCategories(state, action) {
    return state
        .set('isLoadingCategories', true);
}

function loadCategoriesSuccess(state, action) {
    return state
        .set('isLoadingCategories', false)
        .set('categories', Immutable.fromJS(action.categories));
}

function loadCategoriesFailed(state, action) {
    return state
        .set('isLoadingCategories', false);
}

export default eventReducer;
