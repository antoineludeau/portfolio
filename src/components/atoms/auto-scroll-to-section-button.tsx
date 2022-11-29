import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-scroll";

interface AutoScrollToSectionButtonProps {
  to: string;
}

export const AutoScrollToSectionButton = ({
  to,
}: AutoScrollToSectionButtonProps) => {
  return (
    <Link
      to={to}
      style={{ textDecoration: "none", color: "inherit" }}
      spy={true}
      smooth={true}
      duration={500}
    >
      <IconButton aria-label="go to next section button">
        <KeyboardArrowDownIcon sx={{ color: "#e4a0a1" }} />
      </IconButton>
    </Link>
  );
};
