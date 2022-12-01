import Grid from "@mui/material/Grid";

import { SectionLayout } from "../templates";
import { AutoScrollToSectionButton } from "../atoms";
import { ServiceCard } from "../molecules";

import Service1 from "../../assets/image/service-1.png";
import Service2 from "../../assets/image/service-2.png";
import Service3 from "../../assets/image/service-3.png";
import Service4 from "../../assets/image/service-4.png";
import Service5 from "../../assets/image/service-5.png";

interface Service {
  logo: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    logo: Service1,
    title: "Café",
    description: `Appelons-nous ou prenons un café pour se présenter 
      et discuter de votre idée/projet. Si vous n’avez pas 
      encore de projet concret mais que vous voulez juste 
      discuter ou élargir votre réseau, c’est avec grand 
      plaisir !`,
  },
  {
    logo: Service2,
    title: "Besoins",
    description: `Détaillons votre besoin dans les moindres détails pendant 
    un rendez-vous de 1h. Cette étape me permettra de construire 
    des documents de spécifications que je vous présente ensuite 
    pendant un nouveau rendez-vous de 1h.`,
  },
  {
    logo: Service3,
    title: "Devis",
    description: `Je construis un devis qui répond le mieux à vos attentes 
      et vous le présente pendant un rendez-vous de 1h. Si vous 
      acceptez le devis, nous commençons notre collaboration.`,
  },
  {
    logo: Service4,
    title: "Code",
    description: `C’est le moment de coder ! Pendant cette étape, je m’organise 
      en AGILE avec des sprints courts qui se terminent 
      par une démo, une livraison de code et la présentation du 
      prochain sprint.`,
  },
  {
    logo: Service5,
    title: "Livraison",
    description: `Je vous livre l’ensemble du code dans les délais et conforme à vos 
      exigences. Un déploiement en ligne peut-être éventuellement réalisé 
      selon vos demandes.`,
  },
];

export const ServicesSection = () => {
  return (
    <SectionLayout
      title="MON PROCESSUS"
      subtitle="Rencontrons-nous et discutons de vos projets"
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="top"
        mt={9}
      >
        {services.map((service, index) => (
          <Grid key={index} item lg={2} md={4} xs={12}>
            <ServiceCard
              logo={service.logo}
              title={service.title}
              description={service.description}
            ></ServiceCard>
          </Grid>
        ))}
        <Grid item xs={12} textAlign="center">
          <AutoScrollToSectionButton to="skills" />
        </Grid>
      </Grid>
    </SectionLayout>
  );
};
