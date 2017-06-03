import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    myDiary: [],
});

function diaryReducer(state = defaultState, action) {
    const { type } = action;

    switch (action) {

    }

    return state;
}

export default diaryReducer;
