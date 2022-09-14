import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "@mui/material";
import classes from "./index.module.css";
import Link from "../Link/index";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useQueryParams from "../../../Hooks/useQueryParams";
import Typography from "../Typography/Typography";

const links = [
  { label: "Users", href: "/users" },
  { label: "Albums", href: "/albums" },
];

const Navigation = () => {
  const [currentLink, setCurrentLink] = useState("");
  const activeUser = useSelector((state) => state.users.activeUser);
  const currentAlbum = useSelector((state) => state.albums.currentAlbum);
  const { pathname } = useLocation();

  const { id } = useQueryParams("userId");
  const data = useQueryParams("albumId");

  useEffect(() => {
    const path = pathname.slice(1);
    if (path) setCurrentLink(path);
  }, [pathname]);

  return (
    <div className={classes.NavParent}>
      <Breadcrumbs aria-label="breadcrumb">
        {links.map((el) => (
          <Link
            key={el.label}
            underline="hover"
            label={el.label}
            href={el.href}
            variant="h5"
            color={
              el.label.toLowerCase() === currentLink.toLowerCase()
                ? "text.primary"
                : "inherit"
            }
            activeLink={currentLink}
          />
        ))}
        {data.id && <Typography>{currentAlbum.title}</Typography>}
        {data.id && <Typography>Photos</Typography>}
        {id && <Typography>{activeUser.name}</Typography>}
      </Breadcrumbs>
    </div>
  );
};

export default Navigation;
