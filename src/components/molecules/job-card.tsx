import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface JobCardProps {
  logo: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  description: string;
}

export const JobCard = ({
  logo,
  title,
  subtitle,
  subtitle2,
  description,
}: JobCardProps) => {
  return (
    <Grid
      container
      direction="column"
      spacing={1}
      alignItems="left"
      textAlign="left"
      maxWidth="500px"
    >
      <Grid item>
        <img width="100" src={logo} />
      </Grid>
      <Grid item>
        <Typography variant="h4" component="div">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" component="div" >
          {subtitle}
        </Typography>
      </Grid>
      <Grid item sx={{ p: 1 }}>
        <Typography variant="body2" component="div" >
          {subtitle2}
        </Typography>
      </Grid>
      <Grid item sx={{ p: 2 }}>
        <Typography variant="body1" component="div">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};
