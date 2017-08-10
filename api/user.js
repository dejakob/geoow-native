import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

const API_URL = API.URL;

/**
 * Update the categories
 * @param {Array.<String>} categories
 */
function updateCategories(categories) {
    const params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            categories
        })
    };

    return fetch(`${API_URL}/user/me/categories`, params);
}

/**
 * Fetch the stats of a user
 * @returns {Promise.<Array.<Object>>}
 */
function fetchStats() {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        }
    };

    return fetch(`${API_URL}/user/me/stats?limit=20`, params)
        .then(response => response.json());
}

/**
 * Fetch the users profile
 * @returns {Promise}
 */
function fetchMe() {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        }
    };

    return fetch(`${API_URL}/user/me`, params)
        .then(response => response.json());
}

function addPushNotificationId(pushNotificationId) {
    console.log('add push notification id', pushNotificationId);

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
            pushNotificationId
        })
    };

    return fetch(`${API_URL}/user/push-notification-id`, params);
}

function uploadAvatar(imageUrl) {
    const body = new FormData();
    body.append('file', {
        uri: imageUrl,
        name: 'avatar.jpg',
        filename: 'avatar.jpg',
        type: 'image/jpeg',
    });

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        body,
    };

    return fetch(`${API_URL}/user/avatar`, params)
        .then(response => response.json());
}

export {
    updateCategories,
    addPushNotificationId,
    fetchStats,
    fetchMe,
    uploadAvatar
};
