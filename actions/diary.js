import { ACTIONS } from '../constants';

function changePropOfNewDiaryItem(propName, propValue) {
    return {
        type: ACTIONS.DIARY_CHANGE_PROP,
        propName,
        propValue
    }
}

export {
    changePropOfNewDiaryItem
};
