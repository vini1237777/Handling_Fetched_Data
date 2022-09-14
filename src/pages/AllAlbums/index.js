import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Albums from "../../Components/Logical/Albums";
import { onFetchAlbums } from "./AllAlbums.slice";
const AllAlbums = () => {
  const albums = useSelector((state) => state.albums.albums);
  const loader = useSelector((state) => state.albums.loader);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onFetchAlbums());
  }, []);

  return (
    <Albums albums={albums} loadersInfo="Fetching albums..." loader={loader} />
  );
};

export default AllAlbums;
