import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { ReactComponent as Service1 } from "../../assets/image/service-1.svg";
import { ReactComponent as Service2 } from "../../assets/image/service-2.svg";
import { ReactComponent as Service3 } from "../../assets/image/service-3.svg";
import { ReactComponent as Service4 } from "../../assets/image/service-4.svg";
import { ReactComponent as Service5 } from "../../assets/image/service-5.svg";

import { SectionTitle, ServiceCard } from "../molecules";

const services = [
  {
    logo: <Service1 />,
    title: "Café",
    description: "Appelons-nous ou prenons un café pour se présenter et discuter de votre idée/projet. Si vous n’avez pas encore de projet concret mais que vous voulez juste discuter ou élargir votre réseau, c’est avec grand plaisir !",
    subdescriptions:["conversation & notes = 30min (ensemble)"]
  },
  {
    logo: <Service2 />,
    title: "Needs",
    description: "Détaillons votre besoin dans les moindres détails pendant un rendez-vous de 1h. Cette étape me permettra de construire des documents de spécifications que je vous présente ensuite pendant un nouveau rendez-vous de 1h.",
    subdescriptions:["Conversation & notes = 1h (ensemble)", "Prototype et division des tâches = 1 à 2 jours (seul)", "Présentation des spécifications = 1h (ensemble)"]
  },
  {
    logo: <Service3 />,
    title: "Quote",
    description: "Je construis un devis qui réponde le mieux à vos attentes et vous le présente pendant un rendez-vous de 1h. Si vous acceptez le devis, nous commençons notre collaboration ensemble.",
    subdescriptions:["Présentation du devis = 1h (ensemble)"]
  },
  {
    logo: <Service4 />,
    title: "Coding",
    description: "C’est le moment de coder ! Pendant cette étape, je m’organise en AGILE avec des sprints de deux semaines qui se terminent par une démo, une livraison de code et la présentation du prochain sprint. De légers ajustements peuvent alors être réalisés selon vos demandes.",
    subdescriptions:["La durée de cette étape est définie dans le devis."]
  },
  {
    logo: <Service5 />,
    title: "Delivery",
    description: "Je vous livre l’ensemble du code dans les délais et conforme à vos exigences. Un déploiement en ligne peut-être éventuellement réalisé selon vos demandes.",
    subdescriptions:[]
  }
]

export const ServicesSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        padding: 2,
        paddingTop: 5
      }}
    >
      <SectionTitle
        title="MES SERVICES"
        subtitle={
          "Rencontrons-nous et discutons de vos projets."
        }
      />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="top"
            sx={{ marginTop: 8, marginBottom: 8 }}
          >
            {services.map(service =>
              <Grid item md={2} sm={4} xs={12}>
                <ServiceCard
                  logo={service.logo}
                  title={service.title}
                  description={service.description}
                  subdescriptions={service.subdescriptions}
                ></ServiceCard>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
