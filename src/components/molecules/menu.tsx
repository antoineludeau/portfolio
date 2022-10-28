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
import { Link } from "react-scroll";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ParkIcon from "@mui/icons-material/Park";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CallIcon from "@mui/icons-material/Call";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import TuneIcon from "@mui/icons-material/Tune";

const menuItems = [
  {
    id: "home",
    text: "Acceuil",
    icon: <HomeIcon />,
  },
  {
    id: "presentation",
    text: "Presentation",
    icon: <PersonIcon />,
  },
  {
    id: "philosophy",
    text: "Philosophie",
    icon: <ParkIcon />,
  },
  {
    id: "services",
    text: "Services",
    icon: <WorkspacesIcon />,
  },
  {
    id: "skills",
    text: "Compétences",
    icon: <TuneIcon />,
  },
  {
    id: "jobs",
    text: "Expériences Pro",
    icon: <ContentPasteIcon />,
  },
  {
    id: "testimonials",
    text: "Témoignages",
    icon: <ThumbUpAltIcon />,
  },
  {
    id: "contacts",
    text: "Contacts",
    icon: <CallIcon />,
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
                    <ListItemIcon>{item.icon}</ListItemIcon>
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
