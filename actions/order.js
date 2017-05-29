import { ACTIONS } from '../constants';

function buy(articleId) {
    return {
        type: ACTIONS.ORDER_BUY,
        articleId
    }
}

function _buySuccess() {
    return {
        type: ACTIONS.ORDER_BUY_SUCCESS
    }
}

function _buyFailed() {
    return {
        type: ACTIONS.ORDER_BUY_FAILED
    }
}

export {
    buy,
    _buySuccess,
    _buyFailed
}