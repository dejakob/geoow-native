import { ACTIONS } from '../constants';

function loadMessages(user, venue) {
    return {
        type: ACTIONS.MESSAGE_LOAD,
        user,
        venue
    }
}

function loadMessagesSuccess(messageType, userOrVenue, messages) {
    return {
        type: ACTIONS.MESSAGE_LOAD_SUCCESS,
        messageType,
        userOrVenue,
        messages
    }
}

function loadMessagesFailed() {
    return {
        type: ACTIONS.MESSAGE_LOAD_FAILED
    }
}

function sendMessage(user, venue, body) {
    return {
        type: ACTIONS.MESSAGE_SEND,
        user,
        venue,
        body
    }
}

function sendMessageSuccess() {
    return {
        type: ACTIONS.MESSAGE_LOAD_SUCCESS
    }
}

function sendMessageFailed() {
    return {
        type: ACTIONS.MESSAGE_LOAD_FAILED
    }
}

export {
    loadMessages,
    loadMessagesSuccess,
    loadMessagesFailed,

    sendMessage,
    sendMessageSuccess,
    sendMessageFailed
};
