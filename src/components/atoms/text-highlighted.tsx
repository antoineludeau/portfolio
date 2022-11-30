import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

interface TextHighlightedProps {
  variant: TextHighlightedVariantProps;
  color?: string;
  children: React.ReactChild;
}

type TextHighlightedVariantProps =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "inherit"
  | undefined;

export const TextHighlighted = ({
  variant,
  color,
  children,
}: TextHighlightedProps) => {
  const theme = useTheme();

  const backgroundProps = {
    background: `linear-gradient(120deg, ${theme.palette.primary.main}  0%, ${theme.palette.primary.main} 100%)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 40%",
    backgroundPosition: "0 90%",
  };
  return (
    <Box display="flex" justifyContent="center">
      <Typography
        variant={variant}
        component="div"
        textAlign="center"
        sx={{ ...backgroundProps }}
        width="fit-content"
        color={color}
      >
        {children}
      </Typography>
    </Box>
  );
};
