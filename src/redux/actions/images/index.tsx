import HomeService from '../../../services/homeService';
import {GET_IMAGES, SET_IMAGES} from '../../actionTypes/images';

export const getImages = () => {
  return {type: GET_IMAGES};
};

export const setImages = (payload: {}) => {
  return {type: SET_IMAGES, payload};
};

export const fetchImages = () => {
  return async (dispatch: any) => {
    try {
      await dispatch(getImages());
      const response: any = await HomeService.images();
      console.log(response.slice(0, 10));
      await dispatch(setImages(response || {}));
      return true;
    } catch (error) {
      console.log(error);
      await dispatch(setImages({}));
      return false;
    }
  };
};
