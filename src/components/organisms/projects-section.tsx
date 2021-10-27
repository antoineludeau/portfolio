import Box from "@mui/material/Box";
import { SectionTitle } from "../molecules";

export const ProjectsSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#dd9c51",
        }}
      >
        <Box
          sx={{
            padding: 2,
            textAlign: "center",
          }}
        >
          <SectionTitle title="MY PROJECTS" />
        </Box>
      </Box>
    </>
  );
};
