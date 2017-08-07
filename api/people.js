import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

const API_URL = API.URL;

function loadPeopleNearby(latitude, longitude) {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        }
    };

    return fetch(`${API_URL}/people/nearby?latitude=${latitude}&longitude=${longitude}`, params)
        .then(response => response.json())
}

export {
    loadPeopleNearby
};
