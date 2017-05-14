import { ACTIONS } from '../constants';

function loadEvents() {
    return {
        type: ACTIONS.EVENTS_NEARBY_LOAD
    };
}

function _loadEventsSuccess(events) {
    return {
        type: ACTIONS.EVENTS_NEARBY_LOAD_SUCCESS,
        events
    };
}

function _loadEventsFailed() {
    return {
        type: ACTIONS.EVENTS_NEARBY_LOAD_FAILED
    };
}

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
    loadEvents,
    _loadEventsSuccess,
    _loadEventsFailed,

    loadCategories,
    _loadCategoriesSuccess,
    _loadCategoriesFailed
};
