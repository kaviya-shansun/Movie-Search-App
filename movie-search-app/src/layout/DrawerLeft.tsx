import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./DrawerLeft.css";
import Header from "../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBar from "./AppBar";
import MainBar from "./MainBar";
import { Person3 } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const [expanded, setExpanded] = useState({
    menu: false,
    general: false,
  });

  const toggleExpand = (key: keyof typeof expanded) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const menuItems = [
  { label: "Home", path: "/" },
  { label: "Discover", path: "/discover" },
  { label: "Genre", path: "/genre" }
];
  const GeneralItems = [
  { label: "Settings", path: "/setting"},
  { label: "Help", path: "/help"}
];

const navigate = useNavigate();
  return (
    <>
      <MainBar />
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {!open && (
              <Person3
                onClick={handleDrawerOpen}
                sx={{
                  display: "flex",
                  cursor: "pointer",
                  backgroundColor: "#D3D3D3",
                  borderRadius: "15px",
                  height: "30px",
                  width: "30px",
                  padding: "5px",
                }}
              />
            )}
            <Header />
          </Toolbar>
        </AppBar>

        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <DrawerHeader>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "Montserrat",
                marginLeft: "10px",
              }}
            >
              profile
            </Typography>
            <IconButton onClick={handleDrawerClose} sx={{ padding: "1px" }}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />

          <List>
            <div className="NestHeading"
                onClick={() => toggleExpand("menu")}>
              <div className="NestTitle">Menu</div>
              <ExpandMoreIcon
                sx={{
                  color: "grey",
                  transform: expanded.menu ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>
            {expanded.menu &&
              menuItems.map((item, index) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton onClick={()=>navigate(item.path)}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "Montserrat",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>

          <Divider />

          <List>
            <div className="NestHeading"
                onClick={() => toggleExpand("general")}>
              <div className="NestTitle">General</div>
              <ExpandMoreIcon
                sx={{
                  color: "grey",
                  transform: expanded.general
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </div>
            {expanded.general &&
              GeneralItems.map((item, index) => (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{ fontFamily: "Montserrat" }}
                >
                  <ListItemButton onClick={()=>navigate(item.path)}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "Montserrat",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </Drawer>

        {/* ==================== PAGE CONTENT ====================
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>Page content goes here.</Typography>
      </Main> */}
      </Box>
    </>
  );
}
