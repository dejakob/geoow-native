import { ACTIONS } from '../constants';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    latitude: 0,
    longitude: 0
});

function locationReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {

    }

    return state;
}

export default locationReducer;
