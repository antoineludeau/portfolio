import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

interface ServiceCardProps {
  logo: React.ReactChild;
  title: string;
  description: string;
}

export const ServiceCard = ({ logo, title, description }: ServiceCardProps) => {
  return (
    <Grid container spacing={1} direction="column" alignItems="center">
      <Grid item>
        <SvgIcon sx={{ width: "80px", height: "80px" }}>{logo} </SvgIcon>
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
    </Grid>
  );
};
