import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Typography from "@mui/material/Typography";
import VisibilitySensor from "react-visibility-sensor";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  isWhite?: boolean
}

export const SectionTitle = ({ title, subtitle, isWhite }: SectionTitleProps) => {
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
        isWhite={isWhite}
      ></FadeInDirection>
    </VisibilitySensor>
  );
};

interface FadeInDirectionProps {
  isVisible: boolean;
  title: string;
  subtitle?: string;
  isWhite?: boolean
}

const FadeInDirection = ({
  isVisible,
  title,
  subtitle,
  isWhite
}: FadeInDirectionProps) => {
  const propsTitle = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 30 },
  });
  const propsSubTitle = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 30 },
    delay: 800,
  });
  return (
    <>
      <animated.div style={propsTitle}>
        <Typography
          variant="h4"
          component="div"
          sx={{wordWrap: "break-word" }}
          color={isWhite?'white':'black'}
        >
          {title}
        </Typography>
      </animated.div>
      {subtitle && (
        <animated.div style={propsSubTitle}>
          <Typography
            variant="h6"
            component="div"
            sx={{ wordWrap: "break-word" }}
            color={isWhite?'white':'black'}
          >
            {subtitle}
          </Typography>
        </animated.div>
      )}
    </>
  );
};
