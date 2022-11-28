import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const FooterSection = () => {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography
          textAlign="center"
          variant="body2"
          component="div"
          sx={{ fontStyle: "italic" }}
          mb={2}
        >
          Ce portfolio a été créé avec React, Typescript et Material-UI
        </Typography>
      </Grid>
    </Grid>
  );
};
