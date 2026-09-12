import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Bar from "../barChart/Bar";
import barData from "../barChart/data";
import { rows } from "../invoices/data";

const Row3 = () => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 2 }}>
      <Paper sx={{ p: 2, minWidth: 0 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Revenue Breakdown</Typography>
        <Bar data={barData} isDashbord />
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Recent Transactions</Typography>
        <Stack spacing={1.5}>
          {rows.slice(0, 5).map((row) => (
            <Stack key={row.id} direction="row" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="body2">{row.name}</Typography>
                <Typography variant="caption" color="text.secondary">{row.city}</Typography>
              </Box>
              <Typography variant="body2" color="success.main">${(row.id * 1250).toLocaleString()}</Typography>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Row3;
