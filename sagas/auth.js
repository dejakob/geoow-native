import { AsyncStorage } from 'react-native';
import Actions from '../actions';
import AccountKit from 'react-native-facebook-account-kit';
import * as AuthApi from '../api/auth';
import { call, put } from 'redux-saga/effects';

let _token = null;
const getCurrentToken = () => _token;

// Tooo: change
AsyncStorage
    .getItem('token')
    .then(token => _token = token);

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
    } catch (e) {
        console.log('ex', e);
        yield put(Actions._authAccountKitFailed());
    }
}

export {
    authAccountKit,
    getCurrentToken
};