import { getCurrentToken } from '../sagas/auth';
import { API } from '../constants';

const API_URL = API.URL;

function postImage(imageUrl, latitude, longitude) {
    const body = new FormData();
    body.append('latitude', latitude);
    body.append('longitude', longitude);
    body.append('file', {
        uri: imageUrl,
        name: 'item.jpg',
        filename: 'item.jpg',
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

    return fetch(`${API_URL}/feed/image`, params)
        .then(response => response.json())
}

export {
    postImage
}