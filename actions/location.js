import { ACTIONS } from '../constants';

function loadGeolocation() {
    return {
        type: ACTIONS.LOCATION_LOAD_GEOLOCATION
    }
}

export {
    loadGeolocation
};
