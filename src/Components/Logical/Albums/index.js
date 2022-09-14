import React from "react";
import Typography from "../../UI/Typography/Typography";
import DataList from "../../UI/DataList/index";
import Link from "../../UI/Link";

const Albums = ({ albums, loadersInfo, loader }) => {
  const config = [
    { title: "Album", key: "title" },
    {
      title: "Action",
      component: ({ data }) => {
        return (
          <Link
            style={{ textDecoration: "underline", color: "blue" }}
            href={`/photos?albumId=${data.id}`}
            label="View Photos"
          />
        );
      },
    },
  ];

  return (
    <>
      {loader ? (
        <Typography variant="h6"> {loadersInfo} </Typography>
      ) : (
        <DataList config={config} data={albums || []} align="center" />
      )}
    </>
  );
};

export default Albums;
