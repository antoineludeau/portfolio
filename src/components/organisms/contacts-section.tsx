import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CallIcon from "@mui/icons-material/Call";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { SectionTitle, SocialLinks } from "../molecules";

export const ContactsSection = () => {
  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
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
          sx={{ marginTop: 3 }}
          container
          direction="column"
          spacing={3}
          maxWidth="500px"
        >
          <Grid item>
            
            <SocialLinks/>
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
