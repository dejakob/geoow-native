import { getCurrentToken } from '../sagas/user';

/**
 * Update the categories
 * @param {Array.<String>} categories
 */
function updateCategories(categories) {
    const params = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            categories
        })
    };

    return fetch(`${API_URL}/user/categories`, params)
        .then(response => response.json())
}

export {
    updateCategories
};
