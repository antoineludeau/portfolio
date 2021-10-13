import Box from "@mui/material/Box";

interface TemplateHomeProps {
  topBar: React.ReactNode;
  screens: React.ReactNode[];
}

export const TemplateHome = ({ topBar, screens }: TemplateHomeProps) => {
  return (
    <>
      {topBar}
      {screens.map((screen) => {
        return screen;
      })}
    </>
  );
};
