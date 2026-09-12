import {
  
  Avatar,
  IconButton,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Array1 = [
  {
    text: "Dashboard",
    icon: <HomeOutlinedIcon />,
    path: "/"
  },
  {
    text: "Manage Team",
    icon: <GroupOutlinedIcon />,
    path: "/team"
  },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts"
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices"
  }
];
const Array2 = [
  {
    text: "Profile Form",
    icon: <Person2OutlinedIcon />,
    path: "/form"
  },
  {
    text: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    path: "/calendar"
  },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq"
  }
];
const Array3 = [
  {
    text: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    path: "/bar"
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    path: "/pie"
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    path: "/line"
  },
  {
    text: "Geography Chart",
    icon: <MapOutlinedIcon />,
    path: "/geography"
  }
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));
const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
      }
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
      }
    }
  ]
}));

const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    if (isMobile) {
      handleDrawerClose();
    }
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={handleDrawerClose}
      ModalProps={{ keepMounted: true }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 40,
          height: open ? 88 : 40,
          my: 2,
          border: `2px solid ${theme.palette.divider}`,
          transition: "0.24s"
        }}
        alt="Karim Ahmed"
        src="/my-image.jpeg"
      />
      <Typography
        align="center"
        sx={{
          fontSize: !open ? 0 : 17,
          transition: "0.24s",
          fontWeight: "bold"
        }}
      >
        Karim Ahmed
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: !open ? 0 : 15,
          transition: "0.24s",
          fontWeight: "bold",
          mb: 1,
          color: theme.palette.info.main
        }}
      >
        Admin
      </Typography>
      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                handleNavigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  backgroundColor:
                    location.pathname === item.path ? theme.palette.action.selected : null,
                  transition: "background-color 160ms ease, color 160ms ease",
                  "&:hover": { backgroundColor: theme.palette.action.hover }
                },
                open
                  ? {
                      justifyContent: "initial"
                    }
                  : {
                      justifyContent: "center"
                    }
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center"
                  },
                  open
                    ? {
                        mr: 3
                      }
                    : {
                        mr: "auto"
                      }
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1
                      }
                    : {
                        opacity: 0
                      }
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                handleNavigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  backgroundColor:
                    location.pathname === item.path ? theme.palette.action.selected : null,
                  transition: "background-color 160ms ease, color 160ms ease",
                  "&:hover": { backgroundColor: theme.palette.action.hover }
                },
                open
                  ? {
                      justifyContent: "initial"
                    }
                  : {
                      justifyContent: "center"
                    }
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center"
                  },
                  open
                    ? {
                        mr: 3
                      }
                    : {
                        mr: "auto"
                      }
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1
                      }
                    : {
                        opacity: 0
                      }
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                handleNavigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  backgroundColor:
                    location.pathname === item.path ? theme.palette.action.selected : null,
                  transition: "background-color 160ms ease, color 160ms ease",
                  "&:hover": { backgroundColor: theme.palette.action.hover }
                },
                open
                  ? {
                      justifyContent: "initial"
                    }
                  : {
                      justifyContent: "center"
                    }
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center"
                  },
                  open
                    ? {
                        mr: 3
                      }
                    : {
                        mr: "auto"
                      }
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1
                      }
                    : {
                        opacity: 0
                      }
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
