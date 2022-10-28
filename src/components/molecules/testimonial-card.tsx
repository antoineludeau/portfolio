import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

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
    <Grid container direction="column" alignItems={"center"}>
      <Grid item>
        {
          //TO FIX
        }
        <Avatar sx={{ width: 70, height: 70 }} alt="avatar" src={avatar}>
          {title === "Jean-Pascal Torres" ? "JPT" : ""}
        </Avatar>
      </Grid>
      <Grid item>
        <Typography
          variant="h4"
          component="div"
          textAlign="center"
          color="white"
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          component="div"
          textAlign="center"
          color="white"
        >
          {subtitle}
        </Typography>
      </Grid>
      <Grid item sx={{ p: 1 }}>
        <Typography
          variant="body2"
          component="div"
          textAlign="center"
          color="white"
        >
          {subtitle2}
        </Typography>
      </Grid>
      <Grid item sx={{ p: 2 }}>
        <Typography
          variant="body1"
          component="div"
          textAlign="center"
          color="white"
        >
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};
