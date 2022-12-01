import Grid from "@mui/material/Grid";

import { AutoScrollToSectionButton } from "../atoms";
import { PhilosophyCard } from "../molecules";
import { SectionLayout } from "../templates";

import SignImage from "../../assets/image/sign.png";

const backgroundColor = "#f5d6c9";

interface philosophyContentItem {
  title: string;
  description: React.ReactNode;
  illustration?: React.ReactNode;
}

const philosophyContentItems: philosophyContentItem[] = [
  {
    title: "Mon Constat",
    description: `Le numérique est un outil incroyable. Il est utilisé partout 
      dans notre
      vie quotidienne et notre vie professionnelle (4 milliards
      d’utilisateurs). Aussi, le secteur du numérique connait une croissance
      fulgurante, entrainant des problématiques et enjeux importants. Par
      exemple, Il représente à l’échelle mondiale entre 4% et 6% des émissions
      de gaz à effet de serre, dépassant désormais le bilan carbone de l’aviation
      `,
    illustration: undefined,
  },
  {
    title: "Ma Méthode",
    description: `Ma méthode est d’appliquer le numérique responsable : concilier la
      transition numérique de nos sociétés avec les urgences écologiques et
      sociales. Aujourd’hui, on ne peut plus se permettre de répondre à des
      envies, on doit répondre à de réels besoins.
    `,
    illustration: <img src={SignImage} width="100" alt="moutain sign" />,
  },
  {
    title: "Mon Objectif",
    description: `
      Mon but est d’utiliser cet outil génial qu’est le numérique, pour
      réaliser des projets à impact environnemental et/ou social, afin de
      répondre aux 17 objectifs de développement durable définis par l’ONU.`,
    illustration: undefined,
  },
];

export const PhilosophySection = () => {
  return (
    <SectionLayout
      backgroundProps={{ backgroundColor }}
      verticallyCentered={true}
      horizontallyCentered={true}
    >
      <Grid container spacing={2} maxWidth={1800}>
        {philosophyContentItems.map((item, index) => (
          <PhilosophyCard key={index} index={index} item={item} />
        ))}
        <Grid item xs={12} textAlign="center">
          <AutoScrollToSectionButton to="services" />
        </Grid>
      </Grid>
    </SectionLayout>
  );
};
