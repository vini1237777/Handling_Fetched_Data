import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onFetchUser } from "./Users.slice";
import Typography from "../../Components/UI/Typography/Typography";
import DataList from "../../Components/UI/DataList";
import Link from "../../Components/UI/Link";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const loader = useSelector((state) => state.users.loader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onFetchUser());
  }, []);

  const config = [
    { title: "Name", key: "name" },
    { title: "Email", key: "email" },
    { title: "Phone", key: "phone" },
    {
      title: "Action",
      component: ({ data }) => {
        return (
          <Link
            href={`/albums?userId=${data.id}`}
            label="View Albums"
            style={{ textDecoration: "underline", color: "blue" }}
          />
        );
      },
    },
  ];

  return (
    <>
      {loader ? (
        <Typography variant="h6"> Fetching Users.... </Typography>
      ) : (
        <DataList config={config} data={users || []} />
      )}
    </>
  );
};

export default Users;
