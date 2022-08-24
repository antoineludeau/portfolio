import Box from "@mui/material/Box";
import { SectionTitle } from "../molecules";

export const ServicesSection = () => {
  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        height: "100vh",
      }}
    >
      <SectionTitle
        title="MY SERVICES"
        subtitle={
          "I design and code beautifully simple things, and I love what I do."
        }
      />
    </Box>
  );
};
