import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Malt from "../../assets/image/malt.png";
import Antoine from "../../assets/image/antoine.png";

import { SectionLayout } from "../templates";
import { SectionTitle } from "../molecules";

export const ContactsSection = () => {
  return (
    <SectionLayout>
      <>
        <SectionTitle title="CONTACT" subtitle="Collaborons ensemble !" />
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{ marginTop: 3 }}
            container
            direction="column"
            spacing={3}
            maxWidth="400px"
            alignItems="center"
          >
            <Grid item>
              <Avatar
                alt="Antoine"
                src={Antoine}
                sx={{ width: 200, height: 200 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" component="div">
                Téléphone
              </Typography>
              <Typography variant="h6" component="div">
                +33 6 37 69 25 19
              </Typography>
              <Divider variant="middle" />
            </Grid>
            <Grid item>
              <Typography variant="h5" component="div">
                Mail
              </Typography>
              <Typography variant="h6" component="div">
                antoine.ludeau@gmail.com
              </Typography>
              <Divider variant="middle" />
            </Grid>
            <Grid item>
              <Typography variant="h5" component="div">
                Réseaux & Plateformes
              </Typography>
              <Link
                href="https://www.linkedin.com/in/antoineludeau/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton aria-label="linkedin icon button">
                  <LinkedInIcon fontSize="large" sx={{ color: "black" }} />
                </IconButton>
              </Link>
              <Link
                href="https://www.malt.fr/profile/antoineludeau"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton aria-label="malt icon button">
                  <img width="30px" src={Malt} alt="malt icon" />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </>
    </SectionLayout>
  );
};
