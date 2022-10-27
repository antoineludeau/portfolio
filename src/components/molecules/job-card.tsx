import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface JobCardProps {
  logo: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  descriptionItems: string[];
}

export const JobCard = ({
  logo,
  title,
  subtitle,
  subtitle2,
  descriptionItems,
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
        <img height="50" src={logo} alt={`${title}-logo`}/>
      </Grid>
      <Grid item>
        <Typography variant="h5" component="div">
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
      {descriptionItems.map((descriptionItem, index) =>
        <Grid key={index} item>
          <Typography variant="body1" component="div">
            {descriptionItem}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};
