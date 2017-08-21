import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

const API_URL = API.URL;

function loadVenueMessages(venue) {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        }
    };

    return fetch(`${API_URL}/messages/venue?venue=${venue}`, params)
        .then(response => response.json());
}

function loadUserMessages(user) {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        }
    };

    return fetch(`${API_URL}/messages/user?user=${user}`, params)
        .then(response => response.json());
}

function sendMessageToVenue(venue, body) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            venue,
            body
        })
    };

    return fetch(`${API_URL}/messages/venue`, params)
        .then(response => response.json())
}

function sendMessageToUser(user, body) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            user,
            body
        })
    };

    return fetch(`${API_URL}/messages/user`, params)
        .then(response => response.json())
}

export {
    loadUserMessages,
    loadVenueMessages,
    sendMessageToVenue,
    sendMessageToUser
}