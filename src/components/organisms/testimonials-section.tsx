import Box from "@mui/material/Box";
import { SectionTitle } from "../molecules";

export const TestimonialsSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#b7f3c4",
        }}
      >
        <Box
          sx={{
            padding: 2,
            textAlign: "center",
          }}
        >
          <SectionTitle
            title="MY TESTIMONIALS"
            subtitle={"People I've worked with have said some nice things..."}
          />
        </Box>
      </Box>
    </>
  );
};
