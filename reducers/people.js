import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    // Collection of all people
    all: {},

    // Saved people
    nearby: []
});

/**
 * People reducer
 * @param state
 * @param action
 * @returns {any}
 */
function peopleReducer(state = defaultState, action) {
    return state;
}

export default peopleReducer;