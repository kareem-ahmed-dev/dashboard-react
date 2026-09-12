import Button from "@mui/material/Button";
import React from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Box } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const Dashboard = () => {
  const handleDownload = () => {
    const report = [
      ["Metric", "Value", "Change"],
      ["Emails Sent", "12,361", "+14%"],
      ["Sales Obtained", "431,225", "+21%"],
      ["New Clients", "32,441", "+5%"],
      ["Traffic Received", "1,325,134", "+43%"]
    ].map((row) => row.join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([report], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "dashboard-report.csv";
    document.body.appendChild(link);
    link.click();
    window.setTimeout(() => {
      link.remove();
      URL.revokeObjectURL(url);
    }, 1000);
  };

  return (
    <div>
      <Box sx={{ textAlign: "right" }}>
        <Button onClick={handleDownload} sx={{ padding: "6px 8px", textTransform: "capitalize" }} variant="contained">
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
