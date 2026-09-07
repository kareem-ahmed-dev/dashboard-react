import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
const Contacts = () => {
  return (
    <div>
      
      <Box sx={{ height: 600, width: "99%", mx: "auto" }}>
        <DataGrid
          showToolbar rows={rows} columns={columns} />
      </Box>
    </div>
  );
};

export default Contacts;
