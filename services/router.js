let _router = null;

function getRouter() {
    return _router;
}

function _setRouter(r) {
    _router = r;
}

export {
    _setRouter,
    getRouter
}
