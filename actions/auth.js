import { ACTIONS } from '../constants';

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
    authVerify,
    authVerifySuccess,
    authVerifyFailed,

    authEmail,
    authEmailSuccess,
    authEmailFailed
};
