import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { SectionLayout } from "../templates";
import { AutoScrollToSectionButton, TextHighlighted } from "../atoms";

interface PresentationContent {
  title: string;
  description: string;
}

const presentationContent: PresentationContent = {
  title: "Enchanté.",
  description: `Passionné de création, je développe aujourd’hui des applications
  digitales en freelance. Issu d’un cursus d’ingénieur en mécanique
  suivi d'expériences entrepreneuriales, je me suis réorienté vers
  le développement informatique depuis plus de 4 ans. L’originalité
  de mon parcours et ma sensibilité au design, me permettent
  aujourd’hui de comprendre au mieux les besoins de mes clients et
  de communiquer efficacement pour développer des applications, dans
  les délais, et avec un niveau de qualité exigeant.`,
};

export const PresentationSection = () => {
  return (
    <SectionLayout verticallyCentered={true} horizontallyCentered={true}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <TextHighlighted variant="h2">
            {presentationContent.title}
          </TextHighlighted>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            component="div"
            maxWidth="600px"
            textAlign="center"
          >
            {presentationContent.description}
          </Typography>
        </Grid>
        <Grid item>
          <AutoScrollToSectionButton to="philosophy" />
        </Grid>
      </Grid>
    </SectionLayout>
  );
};
