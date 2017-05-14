const API_URL = 'http://127.0.0.1:3000';

function loadCategories() {
    return fetch(`${API_URL}/events/categories`)
        .then(response => response.json())
}

export {
    loadCategories
};
