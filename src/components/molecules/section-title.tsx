import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Typography from "@mui/material/Typography";
import VisibilitySensor from "react-visibility-sensor";

import { TextHighlighted } from "../atoms";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  color?: string;
}

export const SectionTitle = ({ title, subtitle, color }: SectionTitleProps) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const onChange = (visiblity: boolean) => {
    visiblity && setVisibility(visiblity);
  };
  return (
    <VisibilitySensor onChange={onChange}>
      <FadeInDirection
        isVisible={visibility}
        title={title}
        subtitle={subtitle}
        color={color}
      ></FadeInDirection>
    </VisibilitySensor>
  );
};

interface FadeInDirectionProps {
  isVisible: boolean;
  title: string;
  subtitle?: string;
  color?: string;
}

const FadeInDirection = ({
  isVisible,
  title,
  subtitle,
  color,
}: FadeInDirectionProps) => {
  const defaultTitleSpingProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 30 },
  };

  const propsTitle = useSpring(defaultTitleSpingProperties);
  const propsSubtitle = useSpring({
    ...defaultTitleSpingProperties,
    delay: 800,
  });

  return (
    <>
      <animated.div style={propsTitle}>
        <TextHighlighted variant="h4" color={color}>
          {title}
        </TextHighlighted>
      </animated.div>
      {subtitle && (
        <animated.div style={propsSubtitle}>
          <Typography
            variant="h6"
            component="div"
            sx={{ wordWrap: "break-word" }}
            color={color}
            textAlign="center"
          >
            {subtitle}
          </Typography>
        </animated.div>
      )}
    </>
  );
};
