import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
const style = {
  color: "black",
  textDecoration: "underline",
};
const Link = ({ color, href, label, onClick, activeLink, ...rest }) => {
  const styles =
    label && label.toLowerCase() === activeLink && activeLink.toLowerCase()
      ? style
      : {};
  return (
    <div>
      <NavLink
        to={href}
        className="navLink"
        style={{ ...styles }}
        onClick={onClick}
        {...rest}
      >
        {label}
      </NavLink>
    </div>
  );
};

export default Link;
