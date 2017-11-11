import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

const API_URL = API.URL;

/**
 * Fetch the stats of a user
 * @returns {Promise.<Array.<Object>>}
 */
function fetchCategories() {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        }
    };

    return fetch(`${API_URL}/game/categories`, params)
        .then(response => response.json());
}

function finishGoal(levelId, goalId) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            levelId,
            goalId
        })
    };

    return fetch(`${API_URL}/game/goal/finish`, params)
}

export {
    fetchCategories,
    finishGoal
}