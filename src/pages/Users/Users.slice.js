import { FetchData } from "../../Utils/helper";
import { URL } from "../../Utils/url";

export const FETCH_USER_INITIAL = "FETCH_USER_INITIAL";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const onFetchUser = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_USER_INITIAL,
        payload,
      });

      const data = await FetchData({ url: URL.users });
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: data || [],
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: error,
      });
    }
  };
};
