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

function loadEventById(eventId) {
    return {
        type: ACTIONS.EVENTS_LOAD_BY_ID,
        eventId
    }
}

function _loadEventByIdSuccess(event) {
    return {
        type: ACTIONS.EVENTS_LOAD_BY_ID_SUCCESS,
        event
    }
}

function _loadEventByIdFailed() {
    return {
        type: ACTIONS.EVENTS_LOAD_BY_ID_FAILED
    }
}

export {
    loadCategories,
    _loadCategoriesSuccess,
    _loadCategoriesFailed,

    loadEventById,
    _loadEventByIdSuccess,
    _loadEventByIdFailed
};
