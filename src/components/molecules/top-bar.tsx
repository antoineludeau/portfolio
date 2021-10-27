import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Slide from "@mui/material/Slide";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { HashLink as Link } from "react-router-hash-link";

const menuItems = [
  {
    id: "home",
    text: "Home",
  },
  {
    id: "services",
    text: "Services",
  },
  {
    id: "skills",
    text: "Skills",
  },
  {
    id: "projects",
    text: "Projects",
  },
  {
    id: "testimonials",
    text: "Testimonials",
  },
  {
    id: "contacts",
    text: "Contacts",
  },
];
interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const TopBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll>
          <AppBar sx={{ bgcolor: "white", color: "black" }} elevation={0}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setOpenMenu(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div">
                Antoine
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Drawer
          anchor={"left"}
          open={openMenu}
          onClose={() => setOpenMenu(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {menuItems.map((item, index) => (
                <Link
                  key={item.id}
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "auto", block: "end" })
                  }
                  to={`/#${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};
