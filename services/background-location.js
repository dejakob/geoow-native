import BackgroundGeolocation from "react-native-background-geolocation-android";
import { getDistanceInMeter } from '../helpers/distance-helper';
import API from '../constants/api';
import { getCurrentToken } from '../sagas/auth';
// In meter
const MAX_DISTANCE_TO_BE_VALID = 350;
const QUEST_TIMEOUT = 43200000;

let _isInitialized = false;

function initTracking() {
    BackgroundGeolocation.setConfig({
        // Geolocation Config
        desiredAccuracy: 100,
        stationaryRadius: 25,
        distanceFilter: 10,
        // Activity Recognition
        // Application config
        debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
        logLevel: BackgroundGeolocation.LOG_LEVEL_DEBUG,
        stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
        startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
        url: `${API.URL}/locations`,
        headers: {              // <-- Optional HTTP headers
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getCurrentToken()}`
        },
        batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
        autoSync: true
    }, function(state) {
        console.log('state', state);
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
        const checkLocation = ({ coords }) => {
            const distance = getDistanceInMeter(
                latitude,
                longitude,
                coords.latitude,
                coords.longitude
            );

            if (distance <= MAX_DISTANCE_TO_BE_VALID) {
                resolve();
                stop();
                BackgroundGeolocation.un('location', checkLocation);
            }
        };

        BackgroundGeolocation.on('location', checkLocation);
        start();

        setTimeout(() => {
            reject();
            stop();
            BackgroundGeolocation.un('location', checkLocation);
        }, QUEST_TIMEOUT);
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