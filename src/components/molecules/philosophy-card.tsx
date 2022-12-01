import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { TextHighlighted } from "../atoms";

interface PhilosophyCardProps {
  index: number;
  item: philosophyContentItem;
}

interface philosophyContentItem {
  title: string;
  description: React.ReactNode;
  illustration?: React.ReactNode;
}

export const PhilosophyCard = ({ index, item }: PhilosophyCardProps) => {
  const theme = useTheme();
  return (
    <Grid item md={4} xs={12}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography
            variant="h1"
            component="div"
            color="secondary"
            sx={{ textShadow: `5px 5px ${theme.palette.primary.main}` }}
          >
            {index + 1}
          </Typography>
        </Grid>
        <Grid item>
          <TextHighlighted variant="h4">{item.title}</TextHighlighted>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            component="div"
            maxWidth="400px"
            textAlign="center"
            p={2}
          >
            {item.description}
          </Typography>
        </Grid>
        {item.illustration && <Grid item>{item.illustration}</Grid>}
      </Grid>
    </Grid>
  );
};
