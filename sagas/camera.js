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
        console.log('scanType', scanType);

        let savedImagePath = null;

        if (scanType === 'AVATAR') {
            const result = yield call(UserApi.uploadAvatar, imagePath);
            savedImagePath = result.path;
        }

        console.log('saved image path', savedImagePath);

        yield put(Actions.uploadImageSuccess(savedImagePath));
    }
    catch (ex) {
        yield put(Actions.uploadImageFailed(ex));
    }
}

export {
    uploadImage
};
