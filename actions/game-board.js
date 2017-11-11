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

function finishGoal(levelId, goalId) {
    return {
        type: ACTIONS.FINISH_GOAL,
        levelId,
        goalId
    }
}

function _finishGoalSuccess() {
    return {
        type: ACTIONS.FINISH_GOAL_SUCCESS
    }
}

function _finishGoalFailed() {
    return {
        type: ACTIONS.FINISH_GOAL_FAILED
    }
}

export {
    loadCategories,
    _loadCategoriesSuccess,
    _loadCategoriesFailed,

    finishGoal,
    _finishGoalSuccess,
    _finishGoalFailed
};
