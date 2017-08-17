import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

function updateProfile(data) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify(data)
    };

    return fetch(`${API.URL}/user`, params);
}

export {
    updateProfile
}