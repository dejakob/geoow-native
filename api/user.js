import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

const API_URL = API.URL;

/**
 * Update the categories
 * @param {Array.<String>} categories
 */
function updateCategories(categories) {
    const params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            categories
        })
    };

    return fetch(`${API_URL}/user/me/categories`, params);
}

/**
 * Fetch the stats of a user
 * @returns {Promise.<Array.<Object>>}
 */
function fetchStats() {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        }
    };

    return fetch(`${API_URL}/user/me/stats`, params)
        .then(response => response.json());
}

export {
    updateCategories,
    fetchStats
};
