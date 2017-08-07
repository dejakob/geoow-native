import { API } from '../constants';

const API_URL = API.URL;

function loadPeopleNearby(latitude, longitude) {
    return fetch(`${API_URL}/people/nearby?latitude=${latitude}&longitude=${longitude}`)
        .then(response => response.json())
}

export {
    loadPeopleNearby
};
