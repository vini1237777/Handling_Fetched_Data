import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "../../Components/UI/Typography/Typography";
import { onFetchPhotosByAlbumId } from "./AlbumPhotos.slice";
import useQueryParams from "../../Hooks/useQueryParams";
import ImageListPhotos from "../../Components/UI/ImageListPhotos";

const AlbumPhotos = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.albums.photos);
  const loader = useSelector((state) => state.albums.loader);
  const currentAlbum = useSelector((state) => state.albums.currentAlbum);
  const { id } = useQueryParams("albumId");
  useEffect(() => {
    dispatch(onFetchPhotosByAlbumId({ id }));
  }, [id]);

  return (
    <>
      {loader ? (
        <Typography>Loading photos... </Typography>
      ) : (
        <>
          <ImageListPhotos photos={photos} currentAlbum={currentAlbum} />
        </>
      )}
    </>
  );
};

export default AlbumPhotos;
