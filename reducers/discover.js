import Immutable from 'immutable';
import ACTIONS from '../constants/actions';

const defaultState = Immutable.fromJS({

    // List of indexes, events are on event reducer
    eventsNearby: [],

    isLoadingEventsNearby: false
});

function discoverReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.DISCOVER_LOAD_EVENTS_NEARBY:
            return loadEventsNearby(state, action);

        case ACTIONS.DISCOVER_LOAD_EVENTS_NEARBY_SUCCESS:
            return loadEventsNearbySuccess(state, action);

        case ACTIONS.DISCOVER_LOAD_EVENTS_NEARBY_FAILED:
            return loadEventsNearbyFailed(state, action);
    }

    return state;
}

function loadEventsNearby(state, action) {
    return state.set('isLoadingEventsNearby', true);
}

function loadEventsNearbySuccess(state, action) {
    return state
        .set('isLoadingEventsNearby', false)
        .update('eventsNearby', eventsNearby =>
            eventsNearby.merge(Immutable.fromJS(action.events.map(event => event._id)))
        );
}

function loadEventsNearbyFailed(state, action) {
    return state.set('isLoadingEventsNearby', false);
}

export default discoverReducer;
