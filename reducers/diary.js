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

        case ACTIONS.DIARY_SAVE_ITEM:
            return diarySaveItem(state, action);
    }

    return state;
}

function changeNewDiaryItemProp(state, action) {
    return state.setIn(['newItem', action.propName], action.propValue);
}

function diarySaveItem(state, action) {
    const newItem = state.get('newItem');

    return state
        .update('myDiary', myDiary => myDiary.push(newItem))
        .set('newItem', Immutable.fromJS(newItem));
}

export default diaryReducer;
