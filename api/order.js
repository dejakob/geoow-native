import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

const API_URL = API.URL;

function pay(article) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            article
        })
    };

    return fetch(`${API_URL}/buy`, params)
        .then(response => response.json());
}

export {
    pay
}