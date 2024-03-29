import Box from "@mui/material/Box";

import { SectionTitle } from "../molecules";

interface SectionLayoutProps {
  title?: string;
  subtitle?: string;
  titleColor?:string
  verticallyCentered?: boolean;
  horizontallyCentered?: boolean;
  backgroundProps?: any;
  children: React.ReactChild;
}

export const SectionLayout = ({
  title,
  subtitle,
  titleColor,
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
      <>
      {title && <SectionTitle title={title} subtitle={subtitle} color={titleColor} />}
      {children}
      </>
    </Box>
  );
};
