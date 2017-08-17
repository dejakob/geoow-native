import { Platform, PermissionsAndroid } from 'react-native';
import Actions from '../actions';
import { call, put } from 'redux-saga/effects';

function* loadGeolocation(action) {
    try {
        if (Platform.OS === 'android') {
            yield PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        }

        const location = yield new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(
            resolve,
            reject,
            { timeout: 30000, maximumAge: 100 }
        ));

        yield put(Actions._loadGeolocationSuccess(location.coords.latitude, location.coords.longitude));
    }
    catch (ex) {
        console.log('could not fetch geolocation', ex);
        yield put(Actions._loadGeolocationFailed());
    }
}

export {
    loadGeolocation
};
