import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Line from "../lineChart/Line";
import lineData from "../lineChart/data";
import Geo from "../geography/Geo";
import geographyData from "../geography/data";

const Row2 = () => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.5fr 1fr" }, gap: 2, mb: 2 }}>
      <Paper sx={{ p: 2, minWidth: 0 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Sales Quantity</Typography>
        <Line data={lineData} isDahboard />
      </Paper>
      <Paper sx={{ p: 2, minWidth: 0 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Geography Based Traffic</Typography>
        <Geo data={geographyData} isDashbord />
      </Paper>
    </Box>
  );
};

export default Row2;
