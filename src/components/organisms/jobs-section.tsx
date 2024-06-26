import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { SectionLayout } from "../templates";
import { AutoScrollToSectionButton } from "../atoms";
import { JobCard } from "../molecules";

import BetaGouv from "../../assets/image/betagouv.png";
import DassaultSystemesLogo from "../../assets/image/dassault-systèmes.png";
import HandsawayLogo from "../../assets/image/handsaway.png";
import SommetLogo from "../../assets/image/sommet.png";
import OlaianLogo from "../../assets/image/olaian.png";

const jobs = [
  {
    logo: BetaGouv,
    company: "Beta.gouv",
    title: "Développeur Full Stack - Freelance",
    subtitle: "Beta.gouv & IGN (L'Institut National de l'Information Géographique et Forestière) - Base Adresse Nationale",
    subtitle2: "Déc. 2022 - Aujourd'hui - Paris",
    technos: [
      "#NEXTJS",
      "#NODEJS",
      "#TYPESCRIPT",
      "#MONGODB",
      "#POSTGRESQL",
      "#POSTGIS",
      "#DOCKER",
    ],
    descriptionItems: [
      `Création d’une nouvelle architecture back-end (API REST asynchrone event-driven, base de données relationnelle avec historique) pour implémenter l’identifiant unique de l’adresse française.`,
      `Migration technique de tous les services : typescript, ESModule, Dockerisation, tests automatiques, documentation.`,
      `Refonte du site internet (Next.js) avec implémentation du DSFR (Design System de l'État).`,
    ],
    links: {
      company: "https://beta.gouv.fr/",
      github: "https://github.com/BaseAdresseNationale"
    }
  },
  {
    logo: DassaultSystemesLogo,
    company: "Dassault Systèmes",
    title: "Développeur Full Stack - CDI",
    subtitle: "3DVIA - Dassault Systèmes",
    subtitle2: "Jan. 2020 - Oct. 2022 - Paris",
    technos: [
      "#REACT",
      "#TYPESCRIPT",
      "#MATERIAL-UI",
      "#NODEJS",
      "#POSTGRESQL",
      "#CYPRESS",
      "#DOCKER",
      "#AWS",
      "#AGILE"
    ],
    descriptionItems: [
      `Développement «from scratch» d’applications web (REACT, Typescript).`,
      `Améliorations et nouvelles features de l’API back-end (NodeJS).`,
      `Gestion du pipeline de processing et simplification des assets 3D 
      sur Amazon Web Services (SQS, EC2,S3, CloudWatch, ...).`,
      `Mise en place du déploiement d'un micro-service (Amazon S3 local) 
      pour l'amélioration de l'environnement local de tous les developpeurs de l'entreprise.`,
    ],
    links: {
      company: "https://home.by.me/fr/",
    }
  },
  {
    logo: HandsawayLogo,
    company: "Handsaway",
    title: "Développeur Back-end - Bénévole",
    subtitle: "Handaway",
    subtitle2: "Sept. 2020 - Avril. 2021 - Paris",
    technos: ["#NESTJS", "#AWS"],
    descriptionItems: [
      `Responsable technique de l'API pour l'application mobile (NestJS).`,
      `Création de nouvelles routes et amélioration des routes existantes selon les besoins du front-end.`,
      `Gestion de la base de données sur AWS.`,
    ],
    links: {
      company: "https://www.handsaway.fr/",
    }
  },
  {
    logo: DassaultSystemesLogo,
    company: "Dassault Systèmes",
    title: "Business Analyst pour Applications Web - CDI",
    subtitle: "3DVIA - Dassault Systèmes",
    subtitle2: "Jan. 2017 - Déc. 2019 - Paris",
    technos: ["#INTEGRATION-API", "#JIRA", "#INVISION"],
    descriptionItems: [
      `Specification de «story» pour les sprint d’une équipe de developpeurs.`,
      `Organisation des différentes étapes de vie des sprint (planning, démo, ...).`,
      `Expertise technique auprès des clients sur le process liés aux données et
      à l'intégration de l'API.`,
    ],
    links: {
      company: "https://home.by.me/fr/",
    }
  },
  {
    logo: SommetLogo,
    company: "Sommet",
    title: "Co-fondateur d’une Start-Up",
    subtitle: "SOMMET, « une nouvelle façon de boire le fruit »",
    subtitle2: "Déc. 2015 - Déc. 2016 - Paris",
    technos: ["#ENTREPRENEURIAT"],
    descriptionItems: [
      `Création d’un produit et d’un concept nouveau de jus de fruit en dosette.`,
      `Participation à des concours qui ont mené à l’incubation par «Petit Poucet Incubateur» et le «Centre 
      d’Innovation de l’UTC Compiègne».`,
    ],
  },
  {
    logo: OlaianLogo,
    company: "Decathlon",
    title: "Ingénieur Produit - Stage fin d’étude et CDD",
    subtitle: "OLAIAN - Décathlon",
    subtitle2: "Févr. 2015 - Déc. 2015 - Hendaye",
    technos: ["#CONCEPTION", "#DESIGN"],
    descriptionItems: [
      `Conception et développement de produits, du design à la production, en passant par 
      la conception 3D, le prototypage, les tests techniques, le pricing et la collaboration 
      avec de nombreux fournisseurs.`,
      `Proposition et création complète d’un produit de la gamme qui est vendu en magasin depuis mai 2016.`,
    ],
    links: {
      company: "https://www.olaian.fr/",
    }
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    <SectionLayout
      title="MON EXPERIENCE"
      subtitle="Voici un condensé de mes récentes expériences professionnelles"
    >
      <>
        <Box display="flex" justifyContent="center" mt={7} mb={5}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Job tabs"
            sx={{ borderRight: 3, borderColor: "divider", minWidth: "100px" }}
          >
            {jobs.map((job, index) => (
              <Tab key={index} label={job.company} {...a11yProps(index)} />
            ))}
          </Tabs>
          {jobs.map((job, index) => (
            <TabPanel key={index} value={value} index={index}>
              <JobCard
                logo={job.logo}
                title={job.title}
                subtitle={job.subtitle}
                subtitle2={job.subtitle2}
                technos={job.technos}
                descriptionItems={job.descriptionItems}
                links={job.links}
              ></JobCard>
            </TabPanel>
          ))}
        </Box>
        <Box display="flex" justifyContent="center">
          <AutoScrollToSectionButton to="testimonials" />
        </Box>
      </>
    </SectionLayout>
  );
};
