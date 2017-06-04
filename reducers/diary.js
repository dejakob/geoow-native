import Immutable from 'immutable';
import { ACTIONS, G5_QUESTIONS } from '../constants';

const newItem = {};

G5_QUESTIONS.forEach(({ prop }) => {
    newItem[prop] = '';
    newItem[`${prop}Rating`] = 0;
});

const defaultState = Immutable.fromJS({
    myDiary: [],
    newItem,

    isLoadingItems: false
});

function diaryReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.DIARY_CHANGE_PROP:
            return changeNewDiaryItemProp(state, action);

        case ACTIONS.DIARY_SAVE_ITEM:
            return diarySaveItem(state, action);

        case ACTIONS.DIARY_LOAD_ITEMS:
            return diaryLoadItems(state, action);

        case ACTIONS.DIARY_LOAD_ITEMS_SUCCESS:
            return diaryLoadItemsSuccess(state, action);

        case ACTIONS.DIARY_LOAD_ITEMS_FAILED:
            return diaryLoadItemsFailed(state, action);
    }

    return state;
}

function changeNewDiaryItemProp(state, action) {
    return state.setIn(['newItem', action.propName], action.propValue);
}

function diarySaveItem(state, action) {
    const newItem = state.get('newItem');

    return state
        .update('myDiary', myDiary => myDiary.push(Immutable.fromJS({ contents: newItem })))
        .set('newItem', Immutable.fromJS(newItem));
}

function diaryLoadItems(state, action) {
    return state
        .set('isLoadingItems', true);
}

function diaryLoadItemsSuccess(state, action) {
    console.log('diary items', action.diaryItems);

    return state
        .set('isLoadingItems', false)
        .update('myDiary', myDiary => myDiary.mergeDeep(Immutable.fromJS(action.diaryItems)))
}

function diaryLoadItemsFailed(state, action) {
    return state
        .set('isLoadingItems', false);
}

export default diaryReducer;
