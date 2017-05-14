import Actions from '../actions';
import AccountKit from 'react-native-facebook-account-kit';
import { call, put } from 'redux-saga/effects';


function* authAccountKit() {
    try {
        AccountKit.configure({
            countryWhitelist: ['BE'],
            defaultCountry: 'BE'
        });

        // Todo: or SMS
        const tokenData = yield AccountKit.loginWithEmail();

        if (!tokenData) {
            throw new Error('TOKEN_REJECTED')
        }

        const { accountId, appId, lastRefresh, refreshIntervalSeconds, token } = tokenData;
        const account = yield AccountKit.getCurrentAccount();

        console.log('token', tokenData);
        console.log('account', account);


        // const user = yield call(apiFunc);

        // yield put(Actions._authAccountKitSuccess(user));
    } catch (e) {
        console.log('ex', e);
        yield put(Actions._authAccountKitFailed());
    }
}

export {
    authAccountKit
};
