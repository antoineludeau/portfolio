import Box from "@mui/material/Box";
import { SectionTitle } from "../molecules";

export const TestimonialsSection = () => {
  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <SectionTitle
        title="MY TESTIMONIALS"
        subtitle="People I've worked with have said some nice things..."
      />
    </Box>
  );
};
