import Box from "@mui/material/Box";
import { useSpring, animated } from "react-spring";
import Typography from "@mui/material/Typography";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const onChange = (visiblity: boolean) => {
    console.log(visiblity);
    setVisibility(visiblity);
  };
  return (
    <VisibilitySensor onChange={onChange}>
      <FadeInDirection isVisible={visibility} title={title}></FadeInDirection>
    </VisibilitySensor>
  );
};

interface FadeInDirectionProps {
  isVisible: boolean;
  title: string;
}

const FadeInDirection = ({ isVisible, title }: FadeInDirectionProps) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 30 },
  });
  return (
    <animated.div style={props}>
      <Typography variant="h2" component="div">
        {title}
      </Typography>
    </animated.div>
  );
};
