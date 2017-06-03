import Immutable from 'immutable';
import { ACTIONS, G5_QUESTIONS } from '../constants';

const newItem = {};

G5_QUESTIONS.forEach(({ prop }) => {
    newItem[prop] = '';
    newItem[`${prop}Rating`] = 0;
});

const defaultState = Immutable.fromJS({
    myDiary: [],
    newItem
});

function diaryReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.DIARY_CHANGE_PROP:
            return changeNewDiaryItemProp(state, action);
    }

    return state;
}

function changeNewDiaryItemProp(state, action) {
    return state.setIn(['newItem', action.propName], action.propValue);
}

export default diaryReducer;
