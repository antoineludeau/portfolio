import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CodeIcon from "@mui/icons-material/Code";
import CommentIcon from "@mui/icons-material/Comment";

import { SectionTitle, SkillCard } from "../molecules"

import Climber from "../../assets/image/climbing.png";

const skills = [
  {
    logo: <CodeIcon fontSize="large" />,
    title: "Development",
    subtitle: "Ce qui m'anime le plus : partir d'une idée et lui donner vie en créant des applications from scratch",
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
    ]
  },
  {
    logo: <CommentIcon fontSize="large" />,
    title: "Communication",
    subtitle: "Souvent délaissé par les développeurs, une bonne capacité de communication est pour moi, un des points clé de la réussite de tout projet",
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
    ]
  }
]

export const SkillsSection = () => {
  return (
    <>
      <Box
        sx={{
          padding: 2,
          textAlign: "center",
          minHeight: "100vh",
          backgroundColor: '#A1D9D3',
          paddingTop: 5
        }}
      >
        <SectionTitle title="MES COMPETENCES" subtitle="Voilà ce que je sais faire!" />
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="top"
          sx={{ marginTop: 1, marginBottom: 10 }}
        >
  
            <Grid item md={3} xs={12}>
              <SkillCard
                logo={skills[0].logo}
                title={skills[0].title}
                subtitle={skills[0].subtitle}
                subSkills={skills[0].subSkills}
              ></SkillCard>
            </Grid>
            <Grid item md={1} xs={12} alignItems='center'>
              <img width="100"src={Climber}/>
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
      </Box>
    </>
  );
};
