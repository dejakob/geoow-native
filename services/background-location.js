import BackgroundGeolocation from "react-native-background-geolocation";
import { getDistanceInMeter } from '../helpers/distance-helper';
import store from '../services/store';

// In meter
const MAX_DISTANCE_TO_BE_VALID = 50;
const QUEST_TIMEOUT = 43200000;

let _isInitialized = false;

function initTracking() {
    BackgroundGeolocation.configure({
        // Geolocation Config
        desiredAccuracy: 0,
        stationaryRadius: 25,
        distanceFilter: 10,
        // Activity Recognition
        stopTimeout: 1,
        // Application config
        debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
        logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
        stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
        startOnBoot: false,        // <-- Auto start tracking when device is powered-up.
    }, function(state) {
        console.log("- BackgroundGeolocation is configured and ready: ", state.enabled);

        if (!state.enabled) {
            BackgroundGeolocation.start(function() {
                console.log("- Start success");
            });
        }
    });
}

function questTillLocation(latitude, longitude) {
    return new Promise((resolve, reject) => {
        const distance = getDistanceInMeter(
            latitude,
            longitude,
            store.location.get('latitude'),
            store.location.get('longitude')
        );

        if (distance <= MAX_DISTANCE_TO_BE_VALID) {
            resolve();
        }

        setTimeout(reject, QUEST_TIMEOUT);
    });
}

function start() {
    if (!_isInitialized) {
        initTracking();
        _isInitialized = true;
    }

    BackgroundGeolocation.start();
}

function stop() {
    BackgroundGeolocation.stop();
}

export {
    start,
    stop,
    questTillLocation
}