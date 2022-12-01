import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-scroll";
import { useTheme } from "@mui/material/styles";

interface AutoScrollToSectionButtonProps {
  to: string;
}

export const AutoScrollToSectionButton = ({
  to,
}: AutoScrollToSectionButtonProps) => {
  const theme = useTheme();
  return (
    <Link
      to={to}
      style={{ textDecoration: "none", color: "inherit" }}
      spy={true}
      smooth={true}
      duration={500}
    >
      <IconButton aria-label="go to next section button">
        <KeyboardArrowDownIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      </IconButton>
    </Link>
  );
};
