import { FetchData } from "../../Utils/helper";
import { URL } from "../../Utils/url";

export const FETCH_ALBUMS_BY_USER_INITIAL = "FETCH_ALBUMS_BY_USER_INITIAL";
export const FETCH_ALBUMS_BY_USER_SUCCESS = "FETCH_ALBUMS_BY_USER_SUCCESS";
export const FETCH_ALBUMS_BY_USER_FAILURE = "FETCH_ALBUMS_BY_USER_FAILURE";

export const onFetchAlbumsByUsers = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_ALBUMS_BY_USER_INITIAL,
        payload,
      });
      const data = await FetchData({ url: `${URL.albumsByUser}${payload.id}` });

      dispatch({
        type: FETCH_ALBUMS_BY_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ALBUMS_BY_USER_FAILURE,
        payload: error,
      });
    }
  };
};
