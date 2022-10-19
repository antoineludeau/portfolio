import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CodeIcon from "@mui/icons-material/Code";
import CommentIcon from "@mui/icons-material/Comment";

import { SectionTitle, SkillCard } from "../molecules";

const skills = [
  {
    logo: <CodeIcon fontSize="large" />,
    title: "Development",
    subtitle: "I like to code things from scratch, and enjoy bringing ideas to life.",
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
    subtitle: "Being able to communicate the right ideas is a key point in any project.",
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
          backgroundColor: '#F2F2F2',
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
          columns={12}
        >
          {skills.map(skill =>
            <Grid item md={3} xs={12}>
              <SkillCard
                logo={skill.logo}
                title={skill.title}
                subtitle={skill.subtitle}
                subSkills={skill.subSkills}
              ></SkillCard>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};
