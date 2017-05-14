import { ACTIONS } from '../constants';

function authAccountKit(options = {}) {
    return {
        type: ACTIONS.AUTH_ACCOUNT_KIT,
        options
    };
}

function _authAccountKitSuccess(user) {
    return {
        type: ACTIONS.AUTH_ACCOUNT_KIT_SUCCESS,
        user
    };
}

function _authAccountKitFailed() {
    return {
        type: ACTIONS.AUTH_ACCOUNT_KIT_FAILED
    };
}

export {
    authAccountKit,
    _authAccountKitSuccess,
    _authAccountKitFailed
};
