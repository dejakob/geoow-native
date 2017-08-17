import { ACTIONS } from '../constants';

function uploadImage(scanType, imagePath) {
    return {
        type: ACTIONS.CAMERA_UPLOAD_IMAGE,
        scanType,
        imagePath
    }
}

function uploadImageSuccess(savedImagePath) {
    return {
        type: ACTIONS.CAMERA_UPLOAD_IMAGE_SUCCESS,
        savedImagePath
    }
}

function uploadImageFailed(errData) {
    return {
        type: ACTIONS.CAMERA_UPLOAD_IMAGE_FAILED,
        errData
    }
}

export {
    uploadImage,
    uploadImageSuccess,
    uploadImageFailed
};
