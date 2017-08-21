import { AsyncStorage } from 'react-native';
import {
    compose,
    combineReducers,
    createStore as createReduxStore,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import eventReducer from '../reducers/event';
import userReducer from '../reducers/user';
import locationReducer from '../reducers/location';
import discoverReducer from '../reducers/discover';
import questReducer from '../reducers/quest';
import orderReducer from '../reducers/order';
import diaryReducer from '../reducers/diary';
import peopleReducer from '../reducers/people';
import messageReducer from '../reducers/message';
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
        event: eventReducer,
        user: userReducer,
        location: locationReducer,
        discover: discoverReducer,
        quest: questReducer,
        order: orderReducer,
        diary: diaryReducer,
        people: peopleReducer,
        message: messageReducer
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
