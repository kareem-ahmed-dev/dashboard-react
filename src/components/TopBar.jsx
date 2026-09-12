import {
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  useMediaQuery
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  flex: "1 1 auto",
  minWidth: 0
}));

const SearchIconWrapper = styled("button")(({ theme }) => ({
  border: 0,
  color: "inherit",
  background: "transparent",
  cursor: "pointer",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    }
  ]
}));

const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [menu, setMenu] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const closeMenu = () => setMenu(null);
  const toggleMode = () => {
    const nextMode = theme.palette.mode === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", nextMode);
    setMode(nextMode);
  };
  const handleSearch = () => {
    const routes = {
      dashboard: "/",
      team: "/team",
      contacts: "/contacts",
      invoices: "/invoices",
      form: "/form",
      calendar: "/calendar",
      faq: "/faq",
      bar: "/bar",
      pie: "/pie",
      line: "/line",
      geography: "/geography"
    };
    const query = search.trim().toLowerCase();
    const match = Object.keys(routes).find((route) => route.includes(query));
    if (query && match) {
      navigate(routes[match]);
      setSearch("");
    }
  };

  return (
    <AppBar position="fixed" open={open && !isMobile} style={{ marginBottom: 70 }}>
      <Toolbar sx={{ minWidth: 0, px: { xs: 1, sm: 2 }, gap: { xs: 0.5, sm: 1 } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          aria-expanded={open}
          onClick={(event) => {
            event.stopPropagation();
            handleDrawerOpen();
          }}
          edge="start"
          sx={[
            { marginRight: { xs: 0.5, sm: 3 }, flexShrink: 0 },
            open && !isMobile && { display: "none" }
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Search onKeyDown={(event) => event.key === "Enter" && handleSearch()}>
          <SearchIconWrapper type="button" aria-label="submit search" onClick={handleSearch}>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Search>
        <Box flexGrow={1} />
        <Stack direction="row" sx={{ flexShrink: 0 }}>
          <IconButton color="inherit" onClick={toggleMode}>
            {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
          <IconButton color="inherit" aria-label="notifications" onClick={() => setMenu("notifications")}>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="settings" onClick={() => setMenu("settings")}>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="profile" onClick={() => setMenu("profile")}>
            <Person2OutlinedIcon />
          </IconButton>
        </Stack>
        <Menu anchorEl={document.body} open={Boolean(menu)} onClose={closeMenu}>
          {menu === "notifications" && <MenuItem onClick={closeMenu}>Notifications are up to date</MenuItem>}
          {menu === "settings" && (
            <MenuItem onClick={() => { closeMenu(); toggleMode(); }}>
              Switch to {theme.palette.mode === "dark" ? "light" : "dark"} mode
            </MenuItem>
          )}
          {menu === "profile" && (
            <MenuItem onClick={() => { closeMenu(); navigate("/form"); }}>
              Open profile form
            </MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
