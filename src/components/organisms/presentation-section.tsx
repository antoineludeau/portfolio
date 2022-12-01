import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { SectionLayout } from "../templates";
import { AutoScrollToSectionButton, TextHighlighted } from "../atoms";

interface PresentationContent {
  title: string;
  description: any;
}

const presentationContent: PresentationContent = {
  title: "Enchanté.",
  description: (
    <p>
      Passionné de création, je développe aujourd’hui des{" "}
      <b>applications digitales en freelance</b>. Issu d’un cursus d’ingénieur
      en mécanique suivi d'expériences entrepreneuriales, je me suis réorienté
      vers le développement informatique <b>depuis plus de 4 ans</b>.
      L’originalité de mon parcours et ma <b>sensibilité au design</b>, me
      permettent aujourd’hui de comprendre au mieux les <b>besoins</b> de mes
      clients et de <b>communiquer efficacement</b> pour développer des
      applications, <b>dans les délais</b>, et avec un{" "}
      <b>niveau de qualité exigeant</b>.
    </p>
  ),
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
