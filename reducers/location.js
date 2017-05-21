import { ACTIONS } from '../constants';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    latitude: 0,
    longitude: 0,

    isLoadingGeolocation: false
});

function locationReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.LOCATION_LOAD_GEOLOCATION:
            return loadGeolocation(state, action);

        case ACTIONS.LOCATION_LOAD_GEOLOCATION_SUCCESS:
            return _loadGeolocationSuccess(state, action);

        case ACTIONS.LOCATION_LOAD_GEOLOCATION_FAILED:
            return _loadGeolocationFailed(state, action);
    }

    return state;
}

function loadGeolocation(state, action) {
    return state.set('isLoadingGeolocation', true);
}

function _loadGeolocationSuccess(state, action) {
    return state
        .set('isLoadingGeolocation', false)
        .set('latitude', action.latitude)
        .set('longitude', action.longitude);
}

function _loadGeolocationFailed(state, action) {
    return state.set('isLoadingGeolocation', false);
}

export default locationReducer;
