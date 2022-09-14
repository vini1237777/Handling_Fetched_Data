import * as actionTypes from "../../pages/Users/Users.slice";
import * as actionType from "../../pages/UserAlbums/UserAlbums.slice";
const initialState = {
  loader: false,
  users: [],
  activeUser: {},
};

const usersReducer = (state = initialState, action) => {
  if (action.type === actionTypes.FETCH_USER_INITIAL) {
    return { ...state, loader: true, users: [] };
  }
  if (action.type === actionTypes.FETCH_USER_SUCCESS) {
    return { ...state, loader: false, users: action.payload };
  }
  if (action.type === actionTypes.FETCH_USER_FAILURE) {
    return { ...state, loader: false, users: [] };
  }
  if (action.type === actionType.FETCH_ALBUMS_BY_USER_INITIAL) {
    return {
      ...state,
      activeUser:
        state.users.find(
          (user) => user.id.toString() === action.payload.id.toString()
        ) || {},
    };
  }

  return state;
};

export default usersReducer;
