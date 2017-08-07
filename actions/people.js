import ACTIONS from '../constants/actions';

/**
 * Load people nearby
 * @returns {Object}
 */
function loadPeopleNearby() {
    return {
        type: ACTIONS.PEOPLE_LOAD_NEARBY
    }
}

/**
 * When loading people nearby succeeded
 * @param peopleNearby
 * @returns {Object}
 */
function loadPeopleNearbySuccess(peopleNearby) {
    return {
        type: ACTIONS.PEOPLE_LOAD_NEARBY_SUCCESS,
        peopleNearby
    }
}

/**
 * When loading people nearby failed
 * @param errData
 * @returns {Object}
 */
function loadPeopleNearbyFailed(errData) {
    return {
        type: ACTIONS.PEOPLE_LOAD_NEARBY_FAILED,
        errData
    }
}

export {
    loadPeopleNearby,
    loadPeopleNearbySuccess,
    loadPeopleNearbyFailed
}