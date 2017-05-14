import { AsyncStorage } from 'react-native';
import Actions from '../actions';
import AccountKit from 'react-native-facebook-account-kit';
import * as AuthApi from '../api/auth';
import { call, put } from 'redux-saga/effects';


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

        const { accountId, appId, lastRefresh, refreshIntervalSeconds, token } = tokenData;
        const account = yield AccountKit.getCurrentAccount();
        const { email } = account;

        console.log('token', tokenData);
        console.log('account', account);

        const geoowTokenData = yield call(AuthApi.authAccountKit, accountId, token, email);
        const geoowToken = geoowTokenData.token;

        console.log('geoow token', geoowToken);

        yield AsyncStorage.setItem('token', geoowToken);
        yield put(Actions._authAccountKitSuccess({}));
    } catch (e) {
        console.log('ex', e);
        yield put(Actions._authAccountKitFailed());
    }
}

export {
    authAccountKit
};
