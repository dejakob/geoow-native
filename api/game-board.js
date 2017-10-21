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
    
    console.log('params', params);
    console.log('url', `${API_URL}/game/categories`);

    return fetch(`${API_URL}/game/categories`, params)
        .then(response => response.json());
}

export {
    fetchCategories
}