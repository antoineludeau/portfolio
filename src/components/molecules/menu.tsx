import * as React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import Slide from "@mui/material/Slide";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-scroll";
import Fab from "@mui/material/Fab";

const menuItems = [
  {
    id: "home",
    text: "Home",
  },
  {
    id: "presentation",
    text: "Presentation",
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
    id: "jobs",
    text: "Recent Jobs",
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Slide
      appear={true}
      direction="up"
      timeout={{ enter: 500, exit: 200 }}
      in={scrollPosition > 200}
    >
      {children}
    </Slide>
  );
}

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll>
          <Fab
            aria-label="add"
            sx={{
              color: "white",
              position: "fixed",
              bottom: 16,
              right: 16,
              zIndex: 1,
            }}
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon sx={{ color: "black" }} />
          </Fab>
        </HideOnScroll>

        <Drawer
          anchor={"right"}
          open={openMenu}
          onClose={() => setOpenMenu(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {menuItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpenMenu(false)}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <ListItem button onClick={() => setOpenMenu(false)}>
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
