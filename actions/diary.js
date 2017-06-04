import { ACTIONS } from '../constants';

function changePropOfNewDiaryItem(propName, propValue) {
    return {
        type: ACTIONS.DIARY_CHANGE_PROP,
        propName,
        propValue
    }
}

function saveDiaryItem() {
    return {
        type: ACTIONS.DIARY_SAVE_ITEM
    };
}

function saveDiaryItemSuccess() {
    return {
        type: ACTIONS.DIARY_SAVE_ITEM_SUCCESS
    }
}

function saveDiaryItemFailed() {
    return {
        type: ACTIONS.DIARY_SAVE_ITEM_FAILED
    }
}

function loadDiaryItems() {
    return {
        type: ACTIONS.DIARY_LOAD_ITEMS
    }
}

function loadDiaryItemsSuccess(diaryItems) {
    return {
        type: ACTIONS.DIARY_LOAD_ITEMS_SUCCESS,
        diaryItems
    }
}

function loadDiaryItemsFailed() {
    return {
        type: ACTIONS.DIARY_LOAD_ITEMS_FAILED
    }
}

export {
    changePropOfNewDiaryItem,

    saveDiaryItem,
    saveDiaryItemSuccess,
    saveDiaryItemFailed,

    loadDiaryItems,
    loadDiaryItemsSuccess,
    loadDiaryItemsFailed
};
