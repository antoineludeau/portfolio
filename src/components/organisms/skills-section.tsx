import Box from "@mui/material/Box";
import { SectionTitle } from "../molecules";

export const SkillsSection = () => {
  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        height: "100vh",
      }}
    >
      <SectionTitle title="MY SKILLS" subtitle="This is what I can do!" />
    </Box>
  );
};
