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

    return fetch(`${API_URL}/quest`, params)
        .then(response => response.json());
}

function accomplishQuest(questId, verificationKey) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            questId,
            verificationKey
        })
    };

    return fetch(`${API_URL}/quest/accomplish`, params)
        .then(response => response.json());
}

function rejectQuest(questId, verificationKey) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            questId,
            verificationKey
        })
    };

    return fetch(`${API_URL}/quest/reject`, params)
        .then(response => response.json());
}

export {
    createQuest,
    accomplishQuest,
    rejectQuest
}