import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

interface JobCardProps {
  logo: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  technos?: string[];
  descriptionItems: string[];
  links?: {
    company?: string;
    github?: string;
  };
}

export const JobCard = ({
  logo,
  title,
  subtitle,
  subtitle2,
  technos,
  descriptionItems,
  links,
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
        <Grid
          container
          direction="row"
          spacing={1}
          alignItems="top"
          justifyContent="left"
          maxWidth="500px"
        >
          <Grid item>
            <Link href={links?.company} target="_blank" rel="noreferrer">
              <img height="50" src={logo} alt={`${title}-logo`} />
            </Link>
          </Grid>
          {links?.github && (
            <Grid item>
              <Link href={links?.github} target="_blank" rel="noreferrer">
                <IconButton aria-label="github icon button">
                  <GitHubIcon fontSize="large" sx={{ color: "black" }} />
                </IconButton>
              </Link>
            </Grid>
          )}
        </Grid>
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
