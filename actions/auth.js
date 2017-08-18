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

function authEmail(email) {
    return {
        type: ACTIONS.AUTH_EMAIL,
        email
    }
}

function authEmailSuccess() {
    return {
        type: ACTIONS.AUTH_EMAIL_SUCCESS
    }
}

function authEmailFailed() {
    return {
        type: ACTIONS.AUTH_EMAIL_FAILED
    }
}

function authVerify(verificationToken) {
    return {
        type: ACTIONS.AUTH_VERIFY,
        verificationToken
    }
}

function authVerifySuccess() {
    return {
        type: ACTIONS.AUTH_VERIFY_SUCCESS
    }
}

function authVerifyFailed() {
    return {
        type: ACTIONS.AUTH_VERIFY_FAILED
    }
}

export {
    authAccountKit,
    _authAccountKitSuccess,
    _authAccountKitFailed,

    authVerify,
    authVerifySuccess,
    authVerifyFailed,

    authEmail,
    authEmailSuccess,
    authEmailFailed
};
