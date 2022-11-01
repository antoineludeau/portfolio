import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface ServiceCardProps {
  logo: string;
  title: string;
  description: string;
  subdescriptions: string[];
}

export const ServiceCard = ({
  logo,
  title,
  description,
  subdescriptions,
}: ServiceCardProps) => {
  return (
    <Grid container spacing={1} direction="column" alignItems="center">
      <Grid item>
        <img height="50px"src={logo}/>
      </Grid>
      <Grid item>
        <Typography variant="h4" component="div" textAlign="center">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          maxWidth="300px"
          variant="body1"
          component="div"
          textAlign="center"
        >
          {description}
        </Typography>
      </Grid>
      {subdescriptions.map((subdescription, index) => (
        <Grid key={index} item>
          <Typography
            maxWidth="300px"
            variant="body2"
            component="div"
            textAlign="center"
          >
            {subdescription}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
