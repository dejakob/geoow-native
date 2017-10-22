import { ACTIONS } from '../constants';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    categories: [],
    levels: [],
    isLoadingCategories: false
});

function gameBoardReducer(state = defaultState, action) {
    const { type } = action;
    
    switch (type) {
        case ACTIONS.LOAD_CATEGORIES:
            return loadCategories(state, action);

        case ACTIONS.LOAD_CATEGORIES_SUCCESS:
            return _loadCategoriesSuccess(state, action);

        case ACTIONS.LOAD_CATEGORIES_FAILED:
            return _loadCategoriesFailed(state, action);
    }

    return state;
}

function loadCategories(state, action) {
    return state
        .set('isLoadingCategories', true);
}

function _loadCategoriesSuccess(state, action) {
    return state
        .set('isLoadingCategories', false)
        .update('levels', levels => levels.mergeDeep(action.categories.map(c => c.levels)))
        .update('categories', categories =>
            categories.mergeDeep(action.categories.map(category => ({
                ...category,
                levels: category.levels.map(l => l._id)
            })))
        );
}

function _loadCategoriesFailed(state, action) {
    return state
        .set('isLoadingCategories', false);
}

export default gameBoardReducer;
