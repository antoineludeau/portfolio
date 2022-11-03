import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { SectionTitle, JobCard } from "../molecules";

import DassaultSystemesLogo from "../../assets/image/dassault-systèmes.png";
import HandsawayLogo from "../../assets/image/handsaway.png";
import SommetLogo from "../../assets/image/sommet.png";
import OlaianLogo from "../../assets/image/olaian.png";

const jobs = [
  {
    logo: DassaultSystemesLogo,
    title: "Développeur Full Stack - CDI",
    subtitle: "3DVIA - Dassault Systèmes",
    subtitle2: "Jan. 2020 - Oct. 2022 - Paris",
    descriptionItems: [
      `- Développement «from scratch» d’applications web (REACT,
              Typescript).`,
      `- Améliorations et nouvelle features de l’API
              back-end (NodeJS).`,
      `- Gestion du pipeline de processing et
              simplification des assets 3D sur Amazon Web Services (SQS, EC2,
              S3, CloudWatch, ...).`,
      `- Mise en place du déploiement d'un micro-service 
              (Amazon S3 local) pour l'amélioration de l'environnement local de tous 
              les developpeurs de l'entreprise`,
    ],
  },
  {
    logo: HandsawayLogo,
    title: "Développeur Back-end - Bénévole",
    subtitle: "Handaway",
    subtitle2: "Sept. 2020 - Avril. 2021 - Paris",
    descriptionItems: [
      `- Responsable technique de l'API pour l'application mobile (NestJS)`,
      `- Création de nouvelles routes et amélioration des routes existantes selon les besoins du front-end`,
      `- Gestion de la base de donnée sur AWS`,
    ],
  },
  {
    logo: DassaultSystemesLogo,
    title: "Business Analyst pour Applications Web - CDI",
    subtitle: "3DVIA - Dassault Systèmes",
    subtitle2: "Jan. 2017 - Déc. 2019 - Paris",
    descriptionItems: [
      `- Specification de «story» pour les sprint d’une équipe de
            developpeurs.`,
      `- Organisation des différentes étapes de vie des
            sprint (planning, démo, ...).`,
      `- Expertise technique auprès des
            clients sur le process liés aux données.`,
    ],
  },
  {
    logo: SommetLogo,
    title: "Co-fondateur d’une Start-Up",
    subtitle: "SOMMET, « une nouvelle façon de boire le fruit »",
    subtitle2: "Déc. 2015 - Déc. 2016 - Paris",
    descriptionItems: [
      `- Création d’un produit et d’un concept nouveau de jus de fruit
  en dosette.`,
      `- Participation à des concours qui ont mené à
  l’incubation par «Petit Poucet Incubateur» et le «Centre
  d’Innovation de l’UTC Compiègne».`,
    ],
  },
  {
    logo: OlaianLogo,
    title: "Ingénieur Produit - Stage fin d’étude et CDD",
    subtitle: "OLAIAN - Décathlon",
    subtitle2: "Févr. 2015 - Déc. 2015 - Hendaye",
    descriptionItems: [
      `- Conception et Développement de produits, du design à la
    production, en passant par la conception 3D, le prototypage, les
    tests techniques, le pricing et la collaboration avec de
    nombreux fournisseurs.`,
      `- Proposition et création complète d’un
    produit de la gamme qui est vendu en magasin depuis mai 2016.`,
    ],
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const JobsSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          padding: 2,
          textAlign: "center",
          minHeight: "100vh",
          paddingTop: 5,
        }}
      >
        <SectionTitle
          title="MON EXPERIENCE"
          subtitle="Voici un condensé de mes récentes expériences professionnelles"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
            marginBottom: 10,
          }}
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider", minWidth: "100px" }}
          >
            <Tab label="Dassault Systèmes" {...a11yProps(0)} />
            <Tab label="Handsaway" {...a11yProps(1)} />
            <Tab label="Dassault Systèmes" {...a11yProps(2)} />
            <Tab label="Sommet" {...a11yProps(3)} />
            <Tab label="Decathlon" {...a11yProps(4)} />
          </Tabs>
          {jobs.map((job, index) => (
            <TabPanel key={index} value={value} index={index}>
              <JobCard
                logo={job.logo}
                title={job.title}
                subtitle={job.subtitle}
                subtitle2={job.subtitle2}
                descriptionItems={job.descriptionItems}
              ></JobCard>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </>
  );
};
