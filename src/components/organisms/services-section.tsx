import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { ReactComponent as Service1 } from "../../assets/image/service-1.svg";
import { ReactComponent as Service2 } from "../../assets/image/service-2.svg";
import { ReactComponent as Service3 } from "../../assets/image/service-3.svg";
import { ReactComponent as Service4 } from "../../assets/image/service-4.svg";
import { ReactComponent as Service5 } from "../../assets/image/service-5.svg";
import { SectionTitle, ServiceCard } from "../molecules";

export const ServicesSection = () => {
  return (
    <Box
      sx={{
        paddingTop:'400',
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: '#F2F2F2'
      }}
    >
      <SectionTitle
        title="MES SERVICES"
        subtitle={
          "Rencontrons-nous et discutons de vos projets !"
        }
      />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="top"
        sx={{ marginTop: 8, marginBottom: 10 }}
      >
        <Grid item md={2} sm={4} xs={12}>
          <ServiceCard
            logo={<Service1 />}
            title="Café"
            description="Let’s have a 30min conversation to introduce ourselves and talk about your project. "
          ></ServiceCard>
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <ServiceCard
            logo={<Service2 />}
            title="Needs"
            description="Let’s detail your needs as deeply as we can during an hour interview. It will help me building a quotation that really fits your needs"
          ></ServiceCard>
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <ServiceCard
            logo={<Service3 />}
            title="Quote"
            description="I build a quotation and we validate it together. The quotation will be divided in two-weeks sprints. Each sprint will cover a part of the objective."
          ></ServiceCard>
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <ServiceCard
            logo={<Service4 />}
            title="Coding"
            description="It is coding time ! During this step, each sprint ends with a code delivery and a demo to show you the progress."
          ></ServiceCard>
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <ServiceCard
            logo={<Service5 />}
            title="Delivery"
            description="Conform to the quotation, with quality code and on schedule !"
          ></ServiceCard>
        </Grid>
      </Grid>
    </Box>
  );
};
