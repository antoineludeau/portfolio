import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CallIcon from "@mui/icons-material/Call";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { SectionTitle } from "../molecules";

export const ContactsSection = () => {
  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: '#F2F2F2',
        paddingTop: 5
      }}
    >
      <SectionTitle
        title="CONTACT"
        subtitle="Collaborons ensemble !"
      />
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{ marginTop: 8 }}
          container
          direction="column"
          spacing={3}
          maxWidth="500px"
        >
          <Grid item>
            <Grid container>
              <Grid item xs={12} sm={2}>
                <CallIcon sx={{ m: 2 }} fontSize="large" />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography sx={{ m: 2 }} component="div">
                  +33 6 37 69 25 19
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item xs={12} sm={2}>
                <EmailIcon sx={{ m: 2 }} fontSize="large" />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography sx={{ m: 2 }} component="div">
                  antoine.ludeau@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item xs={12} sm={2}>
                <LinkedInIcon sx={{ m: 2 }} fontSize="large" />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography sx={{ m: 2 }} component="div">
                  linkedin.com/in/antoineludeau
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
