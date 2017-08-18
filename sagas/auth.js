import { AsyncStorage } from 'react-native';
import BackgroundGeolocation from 'react-native-background-geolocation-android';
import Actions from '../actions';
import AccountKit from 'react-native-facebook-account-kit';
import * as AuthApi from '../api/auth';
import { call, put } from 'redux-saga/effects';

let _token = null;
const getCurrentToken = () => _token;

// Tooo: change
AsyncStorage
    .getItem('token')
    .then(token => {
        _token = token;
        BackgroundGeolocation.configure({
            headers: {              // <-- Optional HTTP headers
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            autoSync: true
        });
    });

function* authAccountKit(action) {
    try {
        const { options } = action;

        AccountKit.configure({
            countryWhitelist: ['BE'],
            defaultCountry: 'BE',
            initialEmail: options.email || ''
        });

        // Todo: or SMS
        const tokenData = yield AccountKit.loginWithEmail();

        if (!tokenData) {
            throw new Error('TOKEN_REJECTED')
        }

        const { accountId, token } = tokenData;
        const account = yield AccountKit.getCurrentAccount();
        const { email } = account;

        const geoowTokenData = yield call(AuthApi.authAccountKit, accountId, token, email);
        const geoowToken = geoowTokenData.token;

        _token = geoowToken;

        yield AsyncStorage.setItem('token', geoowToken);
        yield put(Actions._authAccountKitSuccess({}));
        yield put(Actions.loadMe());

        BackgroundGeolocation.configure({
            headers: {              // <-- Optional HTTP headers
                'Content-Type': 'application/json',
                'authorization': `Bearer ${geoowToken}`
            },
            autoSync: true
        });
    } catch (e) {
        console.log('ex', e);
        yield put(Actions._authAccountKitFailed());
    }
}

function* authEmail(email) {
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

        BackgroundGeolocation.configure({
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
    authAccountKit,
    authEmail,
    authVerify,
    getCurrentToken
};
