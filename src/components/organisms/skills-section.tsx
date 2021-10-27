import Box from "@mui/material/Box";
import { SectionTitle } from "../molecules";

export const SkillsSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor:"#9c7aec"
        }}
      >
        <Box
          sx={{
            padding: 2,
            textAlign: "center",
          }}
        >
       <SectionTitle title="MY SKILLS" />
       </Box>
      </Box>
    </>
  );
};
