import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import SmsIcon from "@mui/icons-material/Sms";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { SectionTitle, SkillCard } from "../molecules";

export const SkillsSection = () => {
  return (
    <>
      <Box
        sx={{
          padding: 2,
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <SectionTitle title="MY SKILLS" subtitle="This is what I can do!" />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="top"
          sx={{ marginTop: 10 }}
        >
          <Grid item md={3} xs={12}>
            <SkillCard
              logo={<WebIcon fontSize="large" />}
              title="Front-End"
              subtitle="I like to code things from scratch, and enjoy bringing ideas
            to life in the browser."
              description="Language I speak : REACT, TYPESCRIPT, ..."
            ></SkillCard>
          </Grid>
          <Grid item md={3} xs={12}>
            <SkillCard
              logo={<StorageIcon fontSize="large" />}
              title="Back-End"
              subtitle="I like to code things from scratch, and enjoy bringing ideas
            to life in the browser."
              description="Language I speak : NodeJS, Express, ..."
            ></SkillCard>
          </Grid>
          <Grid item md={3} xs={12}>
            <SkillCard
              logo={<CloudUploadIcon fontSize="large" />}
              title="Dev-Ops"
              subtitle="I like to code things from scratch, and enjoy bringing ideas
            to life in the browser."
              description="Techno I use: Docker, AWS, ..."
            ></SkillCard>
          </Grid>
          <Grid item md={3} xs={12}>
            <SkillCard
              logo={<SmsIcon fontSize="large" />}
              title="Communication"
              subtitle="I like to code things from scratch, and enjoy bringing ideas
            to life in the browser."
              description="Tools I use : Illustrator, InVision, Figma..."
            ></SkillCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
