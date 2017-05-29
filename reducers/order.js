import Immutable from 'immutable';
import { ACTIONS } from '../constants';

const defaultState = Immutable.fromJS({
    isPaying: false
});

function orderReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.ORDER_BUY:
            return orderBuy(state, action);

        case ACTIONS.ORDER_BUY_SUCCESS:
            return orderBuySuccess(state, action);

        case ACTIONS.ORDER_BUY_FAILED:
            return orderBuyFailed(state, action);
    }

    return state;
}

function orderBuy(state, action) {
    return state.set('isPaying', true)
}

function orderBuySuccess(state, action) {
    return state.set('isPaying', false)
}

function orderBuyFailed(state, action) {
    return state.set('isPaying', false)
}

export default orderReducer;
