import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

interface JobCardProps {
  logo: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  technos?: string[];
  descriptionItems: string[];
}

export const JobCard = ({
  logo,
  title,
  subtitle,
  subtitle2,
  technos,
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
        <img height="50" src={logo} alt={`${title}-logo`} />
      </Grid>
      <Grid item>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" component="div">
          {subtitle}
        </Typography>
      </Grid>
      <Grid item sx={{ p: 1 }}>
        <Typography variant="body2" component="div">
          {subtitle2}
        </Typography>
      </Grid>
      <Grid item sx={{ p: 1, lineHeight: 2 }}>
        {technos?.map((techno, index) => (
          <Chip key={index} sx={{ textColor: "white" }} label={techno} />
        ))}
      </Grid>
      {descriptionItems.map((descriptionItem, index) => (
        <Grid key={index} item>
          <Typography variant="body1" component="div" display="list-item">
            {descriptionItem}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
