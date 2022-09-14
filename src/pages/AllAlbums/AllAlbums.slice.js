import { FetchData } from "../../Utils/helper";
import { URL } from "../../Utils/url";

export const FETCH_ALBUMS_INITIAL = "FETCH_ALBUMS_INITIAL";
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

export const onFetchAlbums = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_ALBUMS_INITIAL,
        payload,
      });

      const data = await FetchData({ url: URL.albums });
      dispatch({
        type: FETCH_ALBUMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ALBUMS_FAILURE,
        payload: error,
      });
    }
  };
};
