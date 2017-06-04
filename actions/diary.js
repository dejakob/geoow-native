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

export {
    changePropOfNewDiaryItem,

    saveDiaryItem,
    saveDiaryItemSuccess,
    saveDiaryItemFailed
};
