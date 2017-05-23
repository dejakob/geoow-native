import store from '../services/store';
import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

const API_URL = API.URL;

function createQuest(event) {
    const locationState = store.getState().location;
    const location = [ locationState.get('longitude'), locationState.get('latitude') ];

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            event,
            location
        })
    };

    console.log('params', params)

    return fetch(`${API_URL}/user/me/categories`, params);
}

export {
    createQuest
}