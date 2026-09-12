import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Card from "./Card";

const Row1 = () => {
  const theme = useTheme();
  const cards = [
    { icon: <EmailIcon sx={{ fontSize: 23, color: theme.palette.secondary.main }} />, title: "12,361", subTitle: "Emails Sent", increase: "+14%" },
    { icon: <PointOfSaleIcon sx={{ fontSize: 23, color: theme.palette.secondary.main }} />, title: "431,225", subTitle: "Sales Obtained", increase: "+21%" },
    { icon: <PersonAddIcon sx={{ fontSize: 23, color: theme.palette.secondary.main }} />, title: "32,441", subTitle: "New Clients", increase: "+5%" },
    { icon: <TrafficIcon sx={{ fontSize: 23, color: theme.palette.secondary.main }} />, title: "1,325,134", subTitle: "Traffic Received", increase: "+43%" }
  ];

  return (
    <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mb: 2, minWidth: 0 }}>
      {cards.map((card) => (
        <Card
          key={card.subTitle}
          {...card}
          chart={<Typography variant="caption" color="text.secondary">Last 30 days</Typography>}
        />
      ))}
    </Stack>
  );
};

export default Row1;
