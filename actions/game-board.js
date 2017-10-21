import { ACTIONS } from '../constants';

function loadCategories() {
    return {
        type: ACTIONS.LOAD_CATEGORIES
    }
}

function _loadCategoriesSuccess(categories) {
    return {
        type: ACTIONS.LOAD_CATEGORIES_SUCCESS,
        categories
    }
}

function _loadCategoriesFailed() {
    return {
        type: ACTIONS.LOAD_CATEGORIES_FAILED
    }
}


export {
    loadCategories,
    _loadCategoriesSuccess,
    _loadCategoriesFailed
};
