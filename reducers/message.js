/*
    allMessages: [],
    byVenue: { venueId: [id...] }
    byUser: { userId: [id...] }
 */
import { ACTIONS } from '../constants';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    allMessages: [],
    byVenue: {},
    byUser: {}
});

function messageReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.MESSAGE_LOAD_SUCCESS:
            state = state
                .update('allMessages', allMessages => allMessages.mergeDeep(Immutable.fromJS(action.messages)));

            if (action.messageType === 'user') {
                if (state.getIn(['byUser', action.userOrVenue])) {
                    state = state.updateIn(['byUser', action.userOrVenue], messageIds => messageIds.push(Immutable.fromJS(action.messages.map(m => m._id))));
                }
                else {
                    state = state.setIn(['byUser', action.userOrVenue], Immutable.fromJS(action.messages.map(m => m._id)));
                }
            }
            else if (action.messageType === 'venue') {
                if (state.getIn(['byVenue', action.userOrVenue])) {
                    state = state.updateIn(['byVenue', action.userOrVenue], messageIds => messageIds.push(Immutable.fromJS(action.messages.map(m => m._id))));
                }
                else {
                    state = state.setIn(['byVenue', action.userOrVenue], Immutable.fromJS(action.messages.map(m => m._id)));
                }
            }

            return state;
    }

    return state;
}

export default messageReducer;