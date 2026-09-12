import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const Card = ({ icon, title, subTitle, chart, increase }) => {
  return (
    <Paper
      sx={{
        flex: "1 1 220px",
        minWidth: { xs: 0, sm: "220px" },
        width: { xs: "100%", sm: "auto" },
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Stack direction="column" gap={1}>
        {icon}
        <Typography variant="body2">{title}</Typography>
        <Typography variant="body2">{subTitle}</Typography>
      </Stack>
      <Stack direction="column">
        {chart}
        <Typography variant="body2" color="success.main">{increase}</Typography>
      </Stack>
    </Paper>
  );
};

export default Card;
