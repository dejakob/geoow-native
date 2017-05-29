import { API } from '../constants';

const API_URL = API.URL;

function loadByCode(articleCode) {
    return fetch(`${API_URL}/article/${articleCode}`)
        .then(response => response.json());
}

export {
    loadByCode
};
