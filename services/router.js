const _onTransitionListeners = [];
let _router = null;

function addOnTransitionListener(listener) {
    _onTransitionListeners.push(listener);
}

function removeOnTransitionListener(listener) {
    const index = _onTransitionListeners.indexOf(listener);
    _onTransitionListeners.splice(index, 1);
}

function triggerTransitionListeners(params) {
    _onTransitionListeners.forEach(listener => {
        if (typeof listener === 'function') {
            listener(params);
        }
    })
}

function getRouter() {
    return _router;
}

function _setRouter(r) {
    _router = r;
}

export {
    addOnTransitionListener,
    removeOnTransitionListener,
    triggerTransitionListeners,

    _setRouter,
    getRouter
}
