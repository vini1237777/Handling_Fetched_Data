import * as actionTypes from "../pages/AllAlbums/AllAlbums.slice";
import * as actionType from "../pages/UserAlbums/UserAlbums.slice";
import * as actionType3 from "../pages/AlbumPhotos/AlbumPhotos.slice";
const initialState = {
  loader: false,
  albums: [],
  photos: [],
  currentAlbum: {},
};

const albumsReducer = (state = initialState, action) => {
  if (action.type === actionTypes.FETCH_ALBUMS_INITIAL) {
    return { ...state, loader: true, albums: [] };
  }
  if (action.type === actionTypes.FETCH_ALBUMS_SUCCESS) {
    return { ...state, loader: false, albums: action.payload };
  }
  if (action.type === actionTypes.FETCH_ALBUMS_FAILURE) {
    return { ...state, loader: false, albums: [] };
  }
  if (action.type === actionType.FETCH_ALBUMS_BY_USER_INITIAL) {
    return { ...state, loader: true, albums: [] };
  }
  if (action.type === actionType.FETCH_ALBUMS_BY_USER_SUCCESS) {
    return { ...state, loader: false, albums: action.payload };
  }
  if (action.type === actionType.FETCH_ALBUMS_BY_USER_FAILURE) {
    return { ...state, loader: false, albums: [] };
  }

  if (action.type === actionType3.FETCH_PHOTOS_INITIAL) {
    return {
      ...state,
      loader: true,
      photos: [],
      currentAlbum:
        state.albums.find(
          (album) => album.id.toString() === action.payload.id.toString()
        ) || {},
    };
  }
  if (action.type === actionType3.FETCH_PHOTOS_SUCCESS) {
    return { ...state, loader: false, photos: action.payload };
  }
  if (action.type === actionType3.FETCH_PHOTOS_FAILURE) {
    return { ...state, loader: false, photos: [] };
  }
  return state;
};

export default albumsReducer;
