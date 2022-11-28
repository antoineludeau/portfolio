import Box from "@mui/material/Box";

interface SectionLayoutProps {
  verticallyCentered?: boolean;
  horizontallyCentered?: boolean;
  backgroundProps?: any;
  children: React.ReactChild;
}

export const SectionLayout = ({
  backgroundProps,
  verticallyCentered,
  horizontallyCentered,
  children,
}: SectionLayoutProps) => {
  return (
    <Box
      display={verticallyCentered || horizontallyCentered ? "flex" : "block"}
      minHeight="100vh"
      sx={{
        ...backgroundProps,
      }}
      alignItems={verticallyCentered ? "center" : "start"}
      justifyContent={horizontallyCentered ? "center" : "start"}
      padding={2}
      pt={5}
      pb={5}
    >
      {children}
    </Box>
  );
};
