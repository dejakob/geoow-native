import { API } from '../constants';

const API_URL = API.URL;

function loadCategories() {
    return fetch(`${API_URL}/events/categories`)
        .then(response => response.json())
}

export {
    loadCategories
};
