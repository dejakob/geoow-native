import { API } from '../constants';

const API_URL = API.URL;

function authEmail(email) {
    return fetch(`${API_URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            linkType: 'app'
        })
    });
}

function authVerify(verificationCode) {
    return fetch(`${API_URL}/auth/verify/${verificationCode}`)
        .then(response => response.json())
}

export {
    authEmail,
    authVerify
};
