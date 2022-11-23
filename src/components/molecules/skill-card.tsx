import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { ReactComponent as Progress90 } from "../../assets/image/progress-90.svg";
import { ReactComponent as Progress80 } from "../../assets/image/progress-80.svg";
import { ReactComponent as Progress70 } from "../../assets/image/progress-70.svg";
import { ReactComponent as Progress60 } from "../../assets/image/progress-60.svg";
import { ReactComponent as Progress50 } from "../../assets/image/progress-50.svg";

interface SkillCardProps {
  logo: React.ReactNode;
  title: string;
  subtitle: string;
  subSkills: SubSkill[];
}

interface SubSkill {
  title: string;
  list: SubSkillList[];
}

interface SubSkillList {
  title: string;
  progress: number;
}

export const SkillCard = ({
  logo,
  title,
  subtitle,
  subSkills,
}: SkillCardProps) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>{logo}</Grid>
      <Grid item>
        <Typography variant="h4" component="div" textAlign="center">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          maxWidth="500px"
          variant="body1"
          component="div"
          textAlign="center"
        >
          {subtitle}
        </Typography>
      </Grid>
      {subSkills.map((subSkill, index) => (
        <React.Fragment key={index}>
          <Grid item sx={{ marginTop: 2, marginBottom: 1 }}>
            <Typography variant="h5" component="div" textAlign="center">
              {subSkill.title}
            </Typography>
          </Grid>
          {subSkill.list.map((item, index) => (
            <Box key={index} sx={{ display: "flex" }} justifyContent="center">
              <Typography
                width="130px"
                variant="body1"
                component="div"
                textAlign="left"
              >
                {item.title}
              </Typography>

              {GetProgressBar(item.progress)}
            </Box>
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
};

const GetProgressBar = (progress: number) => {
  switch (progress) {
    case 90:
      return <Progress90 width="100px" />;
    case 80:
      return <Progress80 width="100px" />;
    case 70:
      return <Progress70 width="100px" />;
    case 60:
      return <Progress60 width="100px" />;
    case 50:
      return <Progress50 width="100px" />;
  }
};
