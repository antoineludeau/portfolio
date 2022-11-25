import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";

import { BouncingArrow } from "../atoms";
import { SocialLinks, InitLoader } from "../molecules";

import MountainImage from "../../assets/image/mountains.png";

const defaultHomeSpingProperties = {
  to: { opacity: 1, x: 0 },
  from: { opacity: 0, x: -10 },
  config: { tension: 30 },
};

export const HomeSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const propsSpring_1 = useSpring({
    ...defaultHomeSpingProperties,
  });
  const propsSpring_2 = useSpring({
    ...defaultHomeSpingProperties,
    delay: 400,
  });
  const propsSpring_3 = useSpring({
    ...defaultHomeSpingProperties,
    delay: 800,
  });
  const propsSpring_4 = useSpring({
    ...defaultHomeSpingProperties,
    delay: 1400,
  });

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsImageLoaded(true);
    image.src = MountainImage;

    return () => {
      image.onload = null;
    };
  }, []);

  if (!isImageLoaded) {
    return <InitLoader />;
  }

  return (
    <>
      <Grid
        container
        minHeight="100vh"
        direction="column"
        justifyContent="top"
        alignItems="left"
        sx={{
          backgroundImage: `url(${MountainImage})`,
          backgroundPositionX: "55%",
          backgroundSize: "cover",
        }}
      >
        <Grid item>
          <Grid container direction="column" padding={2} spacing={2} mt={9}>
            <Grid item>
              <animated.div style={propsSpring_1}>
                <Typography variant="h1" component="div">
                  Bonjour, je suis
                </Typography>
              </animated.div>
            </Grid>
            <Grid item>
              <animated.div style={propsSpring_2}>
                <Typography variant="h2" component="div">
                  Antoine Ludeau
                </Typography>
              </animated.div>
            </Grid>
            <Grid item>
              <animated.div style={propsSpring_3}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "bold",
                    width: "fit-content",
                    backgroundColor: "rgba(228,160,161,0.8)",
                    borderRadius: "6px",
                    padding: "3px 6px",
                  }}
                  color="white"
                >
                  Développeur Web Full Stack
                </Typography>
              </animated.div>
            </Grid>
            <Grid item>
              <animated.div style={propsSpring_4}>
                <SocialLinks />
              </animated.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BouncingArrow />
    </>
  );
};
