import { FetchData } from "../../Utils/helper";
import { URL } from "../../Utils/url";

export const FETCH_PHOTOS_INITIAL = "FETCH_PHOTOS_INITIAL";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

export const onFetchPhotosByAlbumId = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PHOTOS_INITIAL, payload });
      const data = await FetchData({ url: `${URL.photos}${payload.id}` });
      dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_PHOTOS_FAILURE, payload: error });
    }
  };
};
