import ACTIONS from '../constants/actions';

function profileUpdate(data) {
    return {
        type: ACTIONS.PROFILE_UPDATE,
        data
    }
}

function profileUpdateSuccess() {
    return {
        type: ACTIONS.PROFILE_UPDATE_SUCCESS
    }
}

function profileUpdateFailed(errData) {
    return {
        type: ACTIONS.PROFILE_UPDATE_FAILED,
        errData
    }
}

export {
    profileUpdate,
    profileUpdateSuccess,
    profileUpdateFailed
}