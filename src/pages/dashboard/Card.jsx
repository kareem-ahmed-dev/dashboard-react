import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const Card = ({ icon , title ,subTitle, chart, increase }) => {
  return (
    <Paper
      sx={{
        minWidth: "333px",
        p:1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack direction="column" gap={1}>
        {icon}
        <Typography variant="body2">{title}</Typography>
        <Typography variant="body2">{subTitle}</Typography>
      </Stack>
      <Stack direction="column">
        {chart}
        <Typography variant="body2">{increase}</Typography>

      </Stack>
    </Paper>
  );
};

export default Card;
