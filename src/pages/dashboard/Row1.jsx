import { Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import Card from "./Card";
const Row1 = () => {
    const theme = useTheme();
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      sx={{ mb: 2 }}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={<EmailIcon sx={{fontSize:"23px",color:theme.palette.secondary}}/>}
        title="12,361"
        subTitle="Emails Sent"
        chart={<div>Chart</div>}
        increase="+14%"
      />
    </Stack>
  );
};

export default Row1;
