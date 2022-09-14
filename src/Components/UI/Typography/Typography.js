import React from "react";
import { default as MUITypography } from "@mui/material/Typography";

const Typography = ({ variant, ...rest }) => {
  return <MUITypography variant={variant} {...rest}></MUITypography>;
};

export default Typography;
