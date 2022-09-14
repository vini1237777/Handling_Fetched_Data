import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Albums from "../../Components/Logical/Albums";
import Typography from "../../Components/UI/Typography/Typography";
import useQueryParams from "../../Hooks/useQueryParams";
import { onFetchAlbumsByUsers } from "./UserAlbums.slice";

const UserAlbums = () => {
  const albums = useSelector((state) => state.albums.albums);
  const loader = useSelector((state) => state.albums.loader);
  const activeUser = useSelector((state) => state.users.activeUser);

  const { id } = useQueryParams("userId");
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onFetchAlbumsByUsers({ id }));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <Typography>Name:</Typography>
          <Typography>{activeUser.name}</Typography>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <Typography>City:</Typography>
          <Typography>
            {activeUser.address && activeUser.address.city}
          </Typography>
        </div>
      </div>
      <Albums
        albums={albums}
        loadersInfo={`Fetching Data for ${activeUser.name}`}
        loader={loader}
      />
    </>
  );
};

export default UserAlbums;
