import React from "react";
import classes from "./index.module.css";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
} from "@mui/material";

const DataList = ({ config, data, align }) => {
  return (
    <div className={classes.tableRoot}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow key="header">
              {config.map((data) => (
                <TableCell key={data.title} align={align || "right"}>
                  {data.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((obj) => (
              <TableRow key={obj.id}>
                {config.map((element) => (
                  <TableCell key={element.title} align={align || "right"}>
                    {element.component ? (
                      <element.component data={obj} />
                    ) : (
                      obj[element.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataList;
