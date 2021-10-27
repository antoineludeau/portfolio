import Box from "@mui/material/Box";
import { SectionTitle } from "../molecules";

export const ContactsSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#7aecd9",
        }}
      >
        <Box
          sx={{
            padding: 2,
            textAlign: "center",
          }}
        >
          <SectionTitle title="MY CONTACTS" />
        </Box>
      </Box>
    </>
  );
};
