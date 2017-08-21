import { AsyncStorage } from 'react-native';
import BackgroundGeolocation from 'react-native-background-geolocation-android';
import Actions from '../actions';
import * as AuthApi from '../api/auth';
import { call, put } from 'redux-saga/effects';

let _token = null;
const getCurrentToken = () => _token;

// Tooo: change
AsyncStorage
    .getItem('token')
    .then(token => {
        _token = token;
        BackgroundGeolocation.setConfig({
            headers: {              // <-- Optional HTTP headers
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            autoSync: true
        });
    });

function* authEmail({email}) {
    try {
        yield call(AuthApi.authEmail, email);
        yield put(Actions.authEmailSuccess());
    }
    catch (ex) {
        console.log(ex);
        yield put(Actions.authEmailFailed());
    }
}

function* authVerify(action) {
    try {
        const geoowTokenData = yield call(AuthApi.authVerify, action.verificationToken);
        const geoowToken = geoowTokenData.token;

        _token = geoowToken;

        yield AsyncStorage.setItem('token', geoowToken);
        yield put(Actions.loadMe());

        BackgroundGeolocation.setConfig({
            headers: {              // <-- Optional HTTP headers
                'Content-Type': 'application/json',
                'authorization': `Bearer ${geoowToken}`
            },
            autoSync: true
        });

        yield put(Actions.authVerifySuccess());
    }
    catch (ex) {
        console.log(ex);
        yield put(Actions.authVerifyFailed());
    }
}

export {
    authEmail,
    authVerify,
    getCurrentToken
};
