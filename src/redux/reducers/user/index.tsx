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

export const initialState = {
  isImageUploding: false,
  isUserDataUploading: false,
  isUserDataUpdating: false,
  userImageData: [],
  userProfileData: [],
  updatedProfileData: [],
  isFetching: false,
  userData: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case STRAT_UPLOADING_IMAGE:
      return {...state, isImageUploding: true};
    case COMPLETE_UPLOADING_IMAGE:
      return {...state, isImageUploding: false, userImageData: action.payload};
    case FAILED_UPLOADING_IMAGE:
      return {...state, isImageUploding: false, userImageData: ''};
    case STRAT_UPLOADING_USER_DATA:
      return {...state, isUserDataUploading: true};
    case COMPLETE_UPLOADING_USER_DATA:
      return {
        ...state,
        isUserDataUploading: false,
        userProfileData: action.payload,
      };
    case FAILED_UPLOADING_USER_DATA:
      return {...state, isUserDataUploading: false, userProfileData: ''};
    case START_UPDATE_USER_DATA:
      return {...state, isUserDataUpdating: true};
    case COMPLETE_UPDATE_USER_DATA:
      return {
        ...state,
        isUserDataUpdating: false,
        updatedProfileData: action.payload,
      };
    case FAILED_UPDATE_USER_DATA:
      return {...state, isUserDataUpdating: false, updatedProfileData: ''};
    case GET_USER_DATA:
      return {...state, isFetching: true};
    case SET_USER_DATA:
      return {
        ...state,
        isFetching: false,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
