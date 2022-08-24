import Box from "@mui/material/Box";
import { SectionTitle } from "../molecules";

export const ContactsSection = () => {
  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        height: "100vh",
      }}
    >
      <SectionTitle
        title="MY CONTACTS"
        subtitle="Interested in collaborating?"
      />
    </Box>
  );
};
