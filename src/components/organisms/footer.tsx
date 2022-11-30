import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const FooterSection = () => {
  return (
    <Grid container p={2}>
      <Grid item xs={12}>
        <Typography
          textAlign="center"
          variant="body2"
          component="div"
          sx={{ fontStyle: "italic" }}
        >
          Ce portfolio a été créé avec React, Typescript et Material-UI.
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Link
          href="https://github.com/antoineludeau/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Code source
        </Link>
      </Grid>
    </Grid>
  );
};
