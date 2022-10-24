import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';

interface TestimonialCardProps {
  avatar: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  description: string;
}

export const TestimonialCard = ({
  avatar,
  title,
  subtitle,
  subtitle2,
  description,
}: TestimonialCardProps) => {
  return (
    <Grid container direction="column" alignItems={'center'}>
      <Grid item >
        <Avatar sx={{ width: 70, height: 70 }} alt="avatar" src={avatar} />
      </Grid>
      <Grid item>
        <Typography variant="h4" component="div" textAlign="center">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" component="div" textAlign="center">
          {subtitle}
        </Typography>
      </Grid>
      <Grid item sx={{ p: 1 }}>
        <Typography variant="body2" component="div" textAlign="center">
          {subtitle2}
        </Typography>
      </Grid>
      <Grid item sx={{ p: 2 }}>
        <Typography variant="body1" component="div" textAlign="center">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};
