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
    }

    return state;
}

export default discoverReducer;
