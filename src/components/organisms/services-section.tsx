import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

import { SectionLayout } from "../templates";
import { SectionTitle, ServiceCard } from "../molecules";

import Malt from "../../assets/image/malt.png";
import Service1 from "../../assets/image/service-1.png";
import Service2 from "../../assets/image/service-2.png";
import Service3 from "../../assets/image/service-3.png";
import Service4 from "../../assets/image/service-4.png";
import Service5 from "../../assets/image/service-5.png";

interface Service {
  logo: string;
  title: string;
  description: string;
  subdescriptions: string[];
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
    subdescriptions: ["conversation & notes = 30min (ensemble)"],
  },
  {
    logo: Service2,
    title: "Besoins",
    description: `Détaillons votre besoin dans les moindres détails pendant 
    un rendez-vous de 1h. Cette étape me permettra de construire 
    des documents de spécifications que je vous présente ensuite 
    pendant un nouveau rendez-vous de 1h.`,
    subdescriptions: [
      "Conversation & notes = 1h (ensemble)",
      "Prototype et division des tâches = 1 à 2 jours (seul)",
      "Présentation des spécifications = 1h (ensemble)",
    ],
  },
  {
    logo: Service3,
    title: "Devis",
    description: `Je construis un devis qui répond le mieux à vos attentes 
      et vous le présente pendant un rendez-vous de 1h. Si vous 
      acceptez le devis, nous commençons notre collaboration.`,
    subdescriptions: ["Présentation du devis = 1h (ensemble)"],
  },
  {
    logo: Service4,
    title: "Code",
    description: `C’est le moment de coder ! Pendant cette étape, je m’organise 
      en AGILE avec des sprints de deux semaines qui se terminent 
      par une démo, une livraison de code et la présentation du 
      prochain sprint. De légers ajustements peuvent alors être 
      réalisés selon vos demandes.`,
    subdescriptions: ["La durée de cette étape est définie dans le devis."],
  },
  {
    logo: Service5,
    title: "Livraison",
    description: `Je vous livre l’ensemble du code dans les délais et conforme à vos 
      exigences. Un déploiement en ligne peut-être éventuellement réalisé 
      selon vos demandes.`,
    subdescriptions: [],
  },
];

export const ServicesSection = () => {
  return (
    <SectionLayout>
      <>
        <SectionTitle
          title="MES SERVICES"
          subtitle="Rencontrons-nous et discutons de vos projets"
        />
        <Grid container direction="column" alignItems="center" mt={8} mb={8}>
          <Grid item mb={8}>
            <Grid container direction="column" spacing={3}>
              <Grid item textAlign="center">
                <Typography variant="h3" component="div" color="primary">
                  1
                </Typography>
                <Typography variant="h6" component="div">
                  Contrat au temps passé
                </Typography>
                <Typography variant="body1" component="div">
                  Pour connaître mon TJM :
                </Typography>
                <Link
                  href="https://www.malt.fr/profile/antoineludeau"
                  target="_blank"
                  color="inherit"
                >
                  <IconButton color="primary" aria-label="upload picture">
                    <img width="30px" src={Malt} alt="malt icon" />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Divider variant="middle">
                  <Typography variant="h4" component="div">
                    OU
                  </Typography>
                </Divider>
              </Grid>

              <Grid item textAlign="center">
                <Typography variant="h3" component="div" color="primary">
                  2
                </Typography>
                <Typography variant="h6" component="div">
                  Contrat au forfait (devis)
                </Typography>
                <Typography variant="body1" component="div">
                  Pour cette seconde option, mon mode de fonctionnement est le
                  suivant :
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="top"
            >
              {services.map((service, index) => (
                <Grid key={index} item md={2} sm={4} xs={12}>
                  <ServiceCard
                    logo={service.logo}
                    title={service.title}
                    description={service.description}
                    subdescriptions={service.subdescriptions}
                  ></ServiceCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </>
    </SectionLayout>
  );
};
