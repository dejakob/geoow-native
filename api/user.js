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

    return fetch(`${API_URL}/user/me/categories`, params)
        .then(response => response.json())
}

export {
    updateCategories
};
