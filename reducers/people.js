import Immutable from 'immutable';
import ACTIONS from '../constants/actions';

const defaultState = Immutable.fromJS({
    // Collection of all people
    all: {},

    // Saved people
    nearby: [],

    isLoadingPeopleNearby: false
});

/**
 * People reducer
 * @param state
 * @param action
 * @returns {Object}
 */
function peopleReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.PEOPLE_LOAD_NEARBY:
            return state.set('isLoadingPeopleNearby', true);

        case ACTIONS.PEOPLE_LOAD_NEARBY_SUCCESS:
            const { peopleNearby } = action;
            const peopleNearbyCollection = {};

            peopleNearby.forEach(personNearby =>
                peopleNearbyCollection[personNearby._id] = personNearby
            );

            return state
                .set('isLoadingPeopleNearby', false)
                .update('all', all => all.mergeDeep(Immutable.fromJS(peopleNearbyCollection)))
                .set('nearby', Immutable.fromJS(peopleNearby.map(p => p._id)));

        case ACTIONS.PEOPLE_LOAD_NEARBY_FAILED:
            return state
                .set('isLoadingPeopleNearby', false);
    }

    return state;
}

export default peopleReducer;