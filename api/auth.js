import { API } from '../constants';

const API_URL = API.URL;

function authAccountKit(accountId : string, token : string, email : string) {
    const params = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            accountId,
            token,
            email
        })
    };

    return fetch(`${API_URL}/auth/account-kit`, params)
        .then(response => response.json());
}

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
    authAccountKit,
    authEmail,
    authVerify
};
