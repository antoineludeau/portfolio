import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const PresentationSection = () => {
  return (
    <Grid
      container
      minHeight= "100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={3}
    >
      <Grid item>
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid id="presentation-title" item>
            <Typography variant="h2" component="div" textAlign="center">
              Nice to meet you.
            </Typography>
          </Grid>
          <Grid id="presentation-title" item>
            <Typography
              variant="h5"
              component="div"
              maxWidth="600px"
              textAlign="center"
            >
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
