import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Link from "@mui/material/Link";

import { SectionLayout } from "../templates";
import { AutoScrollToSectionButton, TextHighlighted } from "../atoms";

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
    description: (
      <p>
        Le numérique est un outil incroyable. Il est utilisé partout dans notre
        vie quotidienne et notre vie professionnelle (4 milliards
        d’utilisateurs). Il faut pourtant aujourd’hui apporter une certaine
        nuance. Le secteur du numérique connait une croissance fulgurante,
        entrainant des problématiques et enjeux importants. Par exemple, Il
        représente à l’échelle mondiale entre 4% et 6% des émissions de gaz à
        effet de serre, dépassant désormais le bilan carbone de l’aviation
        (resources : collectif Green IT)
        <span>
          <Link
            href="https://www.greenit.fr/2020/10/06/4-des-emissions-de-ges/"
            target="_blank"
            rel="noreferrer"
          >
            <InfoIcon />
          </Link>
        </span>
      </p>
    ),
    illustration: undefined,
  },
  {
    title: "Ma Méthode",
    description: (
      <p>
        Ma méthode est d’appliquer le numérique responsable : concilier la
        transition numérique de nos sociétés avec les urgences écologiques et
        sociales. Aujourd’hui, on ne peut plus se permettre de répondre à des
        envies, on doit répondre à de réels besoins.
      </p>
    ),
    illustration: <img src={SignImage} width="100" alt="moutain sign" />,
  },
  {
    title: "Mon Objectif",
    description: (
      <p>
        Mon but est d’utiliser cet outil génial qu’est le numérique, pour
        réaliser des projets à impact environnemental et/ou social, afin de
        répondre aux 17 objectifs de développement durable définis par l’ONU.
        <span>
          <Link
            href="https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/"
            target="_blank"
            rel="noreferrer"
          >
            <InfoIcon />
          </Link>
        </span>
      </p>
    ),
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
          <Grid key={index} item md={4} xs={12}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography
                  variant="h1"
                  component="div"
                  color="secondary"
                  sx={{ textShadow: "5px 5px #e4a0a1" }}
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
                >
                  {item.description}
                </Typography>
              </Grid>
              {item.illustration && <Grid item>{item.illustration}</Grid>}
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12} textAlign="center">
          <AutoScrollToSectionButton to="services" />
        </Grid>
      </Grid>
    </SectionLayout>
  );
};
