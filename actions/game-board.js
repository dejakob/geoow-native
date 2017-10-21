import { ACTIONS } from '../constants';

function loadCategories() {
    return {
        type: ACTIONS.LOCATION_LOAD_GEOLOCATION
    }
}

function _loadCategoriesSuccess(categories) {
    return {
        type: ACTIONS.LOCATION_LOAD_GEOLOCATION_SUCCESS,
        categories
    }
}

function _loadCategoriesFailed() {
    return {
        type: ACTIONS.LOCATION_LOAD_GEOLOCATION_FAILED
    }
}


export {
    loadCategories,
    _loadCategoriesSuccess,
    _loadCategoriesFailed
};
