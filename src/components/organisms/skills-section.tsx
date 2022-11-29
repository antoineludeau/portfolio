import Grid from "@mui/material/Grid";
import CodeIcon from "@mui/icons-material/Code";
import CommentIcon from "@mui/icons-material/Comment";

import { SectionLayout } from "../templates";
import { SectionTitle, SkillCard } from "../molecules";

import Climber from "../../assets/image/climbing.png";

const backgroundColor = "#A1D9D3";

interface Skill {
  logo: React.ReactNode;
  title: string;
  subtitle: string;
  subSkills: subSkill[];
}

interface subSkill {
  title: string;
  list: subSkillItem[];
}

interface subSkillItem {
  title: string;
  progress: number;
}

const skills: Skill[] = [
  {
    logo: <CodeIcon fontSize="large" />,
    title: "Development",
    subtitle: `Ce qui m'anime le plus : partir d'une idée et lui 
      donner vie en créant des applications from scratch. 
      J'aime aussi apprendre de nouveaux languages et technologies`,
    subSkills: [
      {
        title: "FRONT-END",
        list: [
          { title: "REACT", progress: 90 },
          { title: "TYPESCRIPT", progress: 90 },
          { title: "MATERIAL UI", progress: 90 },
          { title: "CYPRESS", progress: 80 },
          { title: "REACT NATIVE", progress: 50 },
        ],
      },
      {
        title: "BACK-END",
        list: [
          { title: "NODEJS", progress: 90 },
          { title: "API REST", progress: 90 },
          { title: "SQL", progress: 70 },
          { title: "MONGODB", progress: 60 },
        ],
      },
      {
        title: "DEV-OPS",
        list: [
          { title: "DOCKER", progress: 70 },
          { title: "AWS", progress: 50 },
        ],
      },
    ],
  },
  {
    logo: <CommentIcon fontSize="large" />,
    title: "Communication",
    subtitle: `Souvent délaissée par les développeurs, une bonne 
      capacité à communiquer ses idées est pour moi, un 
      des points clé de la réussite de tout projet`,
    subSkills: [
      {
        title: "TOOLS",
        list: [
          { title: "JIRA", progress: 90 },
          { title: "InVision", progress: 90 },
          { title: "Illustrator", progress: 90 },
          { title: "InDesign", progress: 80 },
          { title: "Premiere", progress: 70 },
        ],
      },
      {
        title: "LANGUAGES",
        list: [
          { title: "Anglais", progress: 90 },
          { title: "Portugais", progress: 80 },
          { title: "Espagnol", progress: 80 },
        ],
      },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <SectionLayout backgroundProps={{ backgroundColor }}>
      <>
        <SectionTitle
          title="MES COMPETENCES"
          subtitle="Voilà ce que je sais faire"
        />
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="top"
          mt={3}
          mb={5}
        >
          <Grid item md={3} xs={12}>
            <SkillCard
              logo={skills[0].logo}
              title={skills[0].title}
              subtitle={skills[0].subtitle}
              subSkills={skills[0].subSkills}
            ></SkillCard>
          </Grid>
          <Grid item md={1} xs={12} textAlign="center">
            <img width="100" src={Climber} alt="climber" />
          </Grid>
          <Grid item md={3} xs={12}>
            <SkillCard
              logo={skills[1].logo}
              title={skills[1].title}
              subtitle={skills[1].subtitle}
              subSkills={skills[1].subSkills}
            ></SkillCard>
          </Grid>
        </Grid>
      </>
    </SectionLayout>
  );
};
