import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const FooterSection = () => {
  return (
    <Grid item xs={12} textAlign="center">
      <Typography variant="body2" component="div" sx={{ fontStyle: "italic" }}>
        Ce portfolio a été créé avec React, Typescript et Material-UI
      </Typography>
    </Grid>
  );
};
