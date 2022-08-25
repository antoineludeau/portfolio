import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface SkillCardProps {
  logo: React.ReactChild;
  title: string;
  subtitle: string;
  description: string;
}

export const SkillCard = ({
  logo,
  title,
  subtitle,
  description,
}: SkillCardProps) => {
  return (
    <Grid container direction="column">
      <Grid item>{logo}</Grid>
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
      <Grid item sx={{ p: 2 }}>
        <Typography variant="body1" component="div" textAlign="center">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};
