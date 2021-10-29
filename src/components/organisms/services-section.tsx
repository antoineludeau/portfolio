import Box from "@mui/material/Box";
import { SectionTitle } from "../molecules";

export const ServicesSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#aecfe2",
        }}
      >
        <Box
          sx={{
            padding: 2,
            textAlign: "center"
          }}
        >
          <SectionTitle title="MY SERVICES" />
        </Box>
      </Box>
    </>
  );
};
