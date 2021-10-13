import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import HomeImage from "../../assets/image/home.jpg";

export const FirstScreen = () => {
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          backgroundImage: `url(${HomeImage})`,
          backgroundPositionX: "10%",
        }}
      >
        <Grid
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)"
          }}
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h1" component="div">
              Hello, I'm
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" component="div">
              Antoine Ludeau
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="div">
              Web Developer Full Stack
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
