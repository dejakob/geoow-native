import { ACTIONS } from '../constants';

function updateCategories(categories) {
    return {
        type: ACTIONS.USER_UPDATE_CATEGORIES,
        categories
    };
}

function _updateCategoriesSuccess(categories) {
    return {
        type: ACTIONS.USER_UPDATE_CATEGORIES_SUCCESS,
        categories
    }
}

function _updateCategoriesFailed() {
    return {
        type: ACTIONS.USER_UPDATE_CATEGORIES_FAILED
    }
}

export {
    updateCategories,
    _updateCategoriesSuccess,
    _updateCategoriesFailed
}