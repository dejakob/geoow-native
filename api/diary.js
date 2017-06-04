import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

const API_URL = API.URL;

function getMyDiary() {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        }
    };

    return fetch(`${API_URL}/user/diary`, params)
        .then(response => response.json());
}

function createDiaryItem(item) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            item
        })
    };

    return fetch(`${API_URL}/user/diary`, params);
}

export {
    getMyDiary,
    createDiaryItem
}