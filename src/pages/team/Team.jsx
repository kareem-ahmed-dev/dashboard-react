import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              m: "auto",
              mt: "10px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: "4px",
              backgroundColor: access === "Admin"?theme.palette.primary.dark:access === "Manager"?theme.palette.secondary.dark:"#3da58a",
            }}
          >
            {access === "Admin" ? <AdminPanelSettingsOutlinedIcon sx={{color:"#fff"}} fontSize="small"/>:access == "Manager"?<LockOpenOutlinedIcon sx={{color:"#fff"}} fontSize="small"/>:<SecurityOutlinedIcon sx={{color:"#fff"}} fontSize="small"/>}
            
            <Typography sx={{fontSize:"13px",color:"#fff"}}>{access}</Typography>
          </Box>
        );
      },
      align: "center"
    }
  ];

  return (
    <div>
      <Box sx={{ height:600 , width: "99%" ,mx:"auto"}}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </div>
  );
};

export default Team;
