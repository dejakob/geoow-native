import { AsyncStorage } from 'react-native';
import {
    compose,
    combineReducers,
    createStore as createReduxStore,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import userReducer from '../reducers/user';
import locationReducer from '../reducers/location';
import gameBoardReducer from '../reducers/game-board';
import mainSaga from '../sagas';

const store = createStore();


/**
 * Create a store that can be used with Redux
 * Every React-Redux app, has one Redux store,
 *  containing one app state and reducer.
 * With combineReducers,
 *  you can put multiple reducers into one
 * @returns {Store}
 */
function createStore() {
    const sagaMiddleware = createSagaMiddleware();
    const reducers = {
        user: userReducer,
        location: locationReducer,
        gameBoard: gameBoardReducer
    };

    const reduxStore = createReduxStore(
        combineReducers(reducers),
        undefined,
        compose(
            applyMiddleware(sagaMiddleware)
        )
    );

    sagaMiddleware.run(mainSaga);

    return reduxStore;
}

export default store;
