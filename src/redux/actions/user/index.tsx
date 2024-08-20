import {
  getUser,
  saveUserData,
  updateUser,
  uploadProfileImage,
} from '../../../services/userService';
import {
  COMPLETE_UPDATE_USER_DATA,
  COMPLETE_UPLOADING_IMAGE,
  COMPLETE_UPLOADING_USER_DATA,
  FAILED_UPDATE_USER_DATA,
  FAILED_UPLOADING_IMAGE,
  FAILED_UPLOADING_USER_DATA,
  GET_USER_DATA,
  SET_USER_DATA,
  START_UPDATE_USER_DATA,
  STRAT_UPLOADING_IMAGE,
  STRAT_UPLOADING_USER_DATA,
} from '../../actionTypes/user';

export const startUploadImage = () => {
  return {type: STRAT_UPLOADING_IMAGE};
};

export const completeUploadImage = (payload: {}) => {
  return {type: COMPLETE_UPLOADING_IMAGE, payload};
};

export const failedUploadImage = () => {
  return {type: FAILED_UPLOADING_IMAGE};
};

export const startUploadUserData = () => {
  return {type: STRAT_UPLOADING_USER_DATA};
};

export const completeUploadUserData = (payload: {}) => {
  return {type: COMPLETE_UPLOADING_USER_DATA, payload};
};

export const faliedUploadUserData = () => {
  return {type: FAILED_UPLOADING_USER_DATA};
};

export const startUpdateUserData = () => {
  return {type: START_UPDATE_USER_DATA};
};

export const completeUpdateUserData = (payload: {}) => {
  return {type: COMPLETE_UPDATE_USER_DATA, payload};
};

export const failedUpdateUserData = () => {
  return {type: FAILED_UPDATE_USER_DATA};
};

export const getUserData = () => {
  return {type: GET_USER_DATA};
};

export const setUserData = (payload: {}) => {
  return {type: SET_USER_DATA, payload};
};

export const uploadImage = (imagePath: string) => {
  return async (dispatch: any) => {
    try {
      await dispatch(startUploadImage());
      const response: any = await uploadProfileImage(imagePath);
      await dispatch(completeUploadImage(response || {}));
      return true;
    } catch (error) {
      await dispatch(failedUploadImage());
      return false;
    }
  };
};

export const uploadUserData = (userId: string, data: any) => {
  return async (dispatch: any) => {
    try {
      await dispatch(startUploadUserData());
      const response: any = await saveUserData(userId, data);
      await dispatch(completeUploadUserData(response || {}));
      return true;
    } catch (error) {
      console.log(error);
      await dispatch(faliedUploadUserData());
      return false;
    }
  };
};

export const updateUserData = (userId: string, data: any) => {
  return async (dispatch: any) => {
    try {
      await dispatch(startUpdateUserData());
      const response: any = await updateUser(userId, data);
      await dispatch(completeUpdateUserData(response || {}));
      return true;
    } catch (error) {
      console.log(error);
      await dispatch(failedUpdateUserData());
      return false;
    }
  };
};

export const fetchUserData = (userId: string) => {
  return async (dispatch: any) => {
    try {
      await dispatch(getUserData());
      const response: any = await getUser(userId);
      await dispatch(setUserData(response || {}));
      return true;
    } catch (error) {
      console.log(error);
      await dispatch(setUserData({}));
      return false;
    }
  };
};
