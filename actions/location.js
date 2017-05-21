import { ACTIONS } from '../constants';

function loadGeolocation() {
    return {
        type: ACTIONS.LOCATION_LOAD_GEOLOCATION
    }
}

function _loadGeolocationSuccess(latitude, longitude) {
    return {
        type: ACTIONS.LOCATION_LOAD_GEOLOCATION_SUCCESS,
        latitude,
        longitude
    }
}

function _loadGeolocationFailed() {
    return {
        type: ACTIONS.LOCATION_LOAD_GEOLOCATION_FAILED
    }
}


export {
    loadGeolocation,
    _loadGeolocationSuccess,
    _loadGeolocationFailed
};
