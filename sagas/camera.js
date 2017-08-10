import Actions from '../actions';
import * as UserApi from '../api/user';
import { call, put } from 'redux-saga/effects';

/**
 * Upload image
 * @param {Object} action
 */
function* uploadImage(action) {
    try {
        const { scanType, imagePath } = action;

        let savedImagePath = null;

        if (scanType === 'AVATAR') {
            const result = yield call(UserApi.uploadAvatar, imagePath);
            savedImagePath = result.path;
        }

        yield put(Actions.uploadImageSuccess(savedImagePath));
    }
    catch (ex) {
        console.log(ex);
        yield put(Actions.uploadImageFailed(ex));
    }
}

export {
    uploadImage
};
