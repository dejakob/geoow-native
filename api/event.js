import { API } from '../constants';

const API_URL = API.URL;

function loadCategories() {
    return fetch(`${API_URL}/events/categories`)
        .then(response => response.json())
}

function loadEventsNearby(latitude, longitude) {
    return fetch(`${API_URL}/events/nearby?latitude=${latitude}&longitude=${longitude}`)
        .then(response => response.json())
}

function loadEventById(eventId) {
    return fetch(`${API_URL}/event/${eventId}`)
        .then(response => response.json())
}

export {
    loadCategories,
    loadEventsNearby,
    loadEventById
};
