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

function loadStats() {
    return {
        type: ACTIONS.USER_LOAD_STATS
    }
}

function _loadStatsSuccess(stats) {
    return {
        type: ACTIONS.USER_LOAD_STATS_SUCCESS,
        stats
    }
}

function _loadStatsFailed() {
    return {
        type: ACTIONS.USER_LOAD_STATS_FAILED
    }
}

function loadMe() {
    return {
        type: ACTIONS.USER_LOAD_ME
    }
}

function _loadMeSuccess(me) {
    return {
        type: ACTIONS.USER_LOAD_ME_SUCCESS,
        me
    }
}

function _loadMeFailed() {
    return {
        type: ACTIONS.USER_LOAD_ME_FAILED
    }
}

export {
    updateCategories,
    _updateCategoriesSuccess,
    _updateCategoriesFailed,

    loadStats,
    _loadStatsSuccess,
    _loadStatsFailed,

    loadMe,
    _loadMeSuccess,
    _loadMeFailed
}