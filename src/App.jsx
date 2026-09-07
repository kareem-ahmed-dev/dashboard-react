import React, { useMemo, useState } from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./Theme";
import { Outlet } from "react-router-dom";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = useState(localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "light");
  const themeMode = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={themeMode}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}/>
        <SideBar
          open={open}
          handleDrawerClose={handleDrawerClose}
          theme={theme}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="content">
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
