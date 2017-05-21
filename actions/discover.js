import { ACTIONS } from '../constants';

function loadEventsNearby() {
    return {
        type: ACTIONS.DISCOVER_LOAD_EVENTS_NEARBY
    }
}

function _loadEventsNearbySuccess(events) {
    return {
        type: ACTIONS.DISCOVER_LOAD_EVENTS_NEARBY_SUCCESS,
        events
    }
}

function _loadEventsNearbyFailed() {
    return {
        type: ACTIONS.DISCOVER_LOAD_EVENTS_NEARBY_FAILED
    }
}

export {
    loadEventsNearby,
    _loadEventsNearbySuccess,
    _loadEventsNearbyFailed
}
