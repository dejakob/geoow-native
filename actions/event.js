import { ACTIONS } from '../constants';

function loadCategories() {
    return {
        type: ACTIONS.EVENTS_CATEGORIES_LOAD
    };
}

function _loadCategoriesSuccess(categories) {
    return {
        type: ACTIONS.EVENTS_CATEGORIES_LOAD_SUCCESS,
        categories
    };
}

function _loadCategoriesFailed() {
    return {
        type: ACTIONS.EVENTS_CATEGORIES_LOAD_FAILED
    }
}

export {
    loadCategories,
    _loadCategoriesSuccess,
    _loadCategoriesFailed
};
